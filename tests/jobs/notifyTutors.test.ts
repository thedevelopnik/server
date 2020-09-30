import mongoose from 'mongoose';
import {
  resetDb,
  insertSessionWithVolunteer,
  insertSession
} from '../utils/db-utils';
import notifyTutors from '../../worker/jobs/notifyTutors';
import config from '../../config';
import TwilioService from '../../services/twilio';
import { buildVolunteer } from '../utils/generate';
import { log } from '../../worker/logger';
jest.mock('../../services/twilio');
jest.mock('../../worker/logger');

// db connection
beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

beforeEach(async () => {
  await resetDb();
});

describe('Notify tutors', () => {
  beforeEach(async () => {
    jest.resetAllMocks();
  });

  test('Should not notify volunteers when empty session', async () => {
    const _id = mongoose.Types.ObjectId();
    // @todo: figure out how to properly type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const job: any = {
      data: {
        sessionId: _id,
        notificationSchedule: config.notificationSchedule
      }
    };

    await notifyTutors(job);
    expect(log).toHaveBeenCalledWith(`session ${_id} not found`);
  });

  test('Should not notify volunteers when session is fulfilled', async () => {
    const { session } = await insertSessionWithVolunteer();
    // @todo: figure out how to properly type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const job: any = {
      data: {
        sessionId: session._id,
        notificationSchedule: config.notificationSchedule
      }
    };

    await notifyTutors(job);
    expect(log).toHaveBeenCalledWith(
      `session ${session._id} fulfilled, cancelling notifications`
    );
  });

  test('Should not notify volunteers when notification schedule is empty', async () => {
    const { session } = await insertSession();
    // @todo: figure out how to properly type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const job: any = {
      data: {
        sessionId: session._id,
        notificationSchedule: []
      },
      queue: {
        add: jest.fn()
      }
    };

    TwilioService.notifyVolunteer = jest.fn(() => null);
    await notifyTutors(job);

    expect(job.queue.add).toHaveBeenCalledTimes(0);
    expect(log).toHaveBeenCalledWith('No volunteer notified');
  });

  test('Should notify volunteers', async () => {
    const { session } = await insertSession();
    // @todo: figure out how to properly type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const job: any = {
      data: {
        sessionId: session._id,
        notificationSchedule: [1000, 1000]
      },
      queue: {
        add: jest.fn()
      }
    };
    const volunteer = buildVolunteer();

    TwilioService.notifyVolunteer = jest.fn(() => volunteer);
    await notifyTutors(job);

    expect(job.queue.add).toHaveBeenCalledTimes(1);
    expect(job.data.notificationSchedule.length).toBe(1);
    expect(log).toHaveBeenCalledWith(`Volunteer notified: ${volunteer._id}`);
  });
});
