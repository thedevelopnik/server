import Queue from 'bull';
import { find, map } from 'lodash';
import config from '../config';
import { log } from '../worker/logger';
import { Jobs } from '../worker/jobs';

interface JobTemplate {
  name: Jobs;
  data?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  options?: Queue.JobOptions;
}

const jobTemplates: JobTemplate[] = [
  {
    name: Jobs.UpdateElapsedAvailability,
    options: { repeat: { cron: '0 4 * * *', tz: 'America/New_York' } } // each day at 4am
  },
  {
    name: Jobs.EndStaleSessions,
    options: { repeat: { cron: '0 */2 * * *' } } // every 2 hours at minute 0
  },
  {
    name: Jobs.EmailReferences,
    options: { repeat: { cron: '*/15 * * * *' } } // every 15 minutes
  },
  {
    name: Jobs.EmailReadyToCoach,
    options: { repeat: { cron: '30 * * * *' } } // every hour at minute 30
  }
];

const main = async (): Promise<void> => {
  try {
    const queue = new Queue(
      config.workerQueueName,
      config.redisConnectionString
    );

    const repeatableJobs = await queue.getRepeatableJobs();

    await Promise.all(
      map(repeatableJobs, async job => {
        if (find(jobTemplates, template => template.name === job.name)) {
          log(`Stopping jobs: \n${JSON.stringify(job, null, ' ')}`);
          await queue.removeRepeatableByKey(job.key);
        }
      })
    );

    log(`Starting jobs: \n${JSON.stringify(jobTemplates, null, ' ')}`);
    await Promise.all(
      map(jobTemplates, job => queue.add(job.name, job.data, job.options))
    );

    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

main();
