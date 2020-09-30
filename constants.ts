export const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

export const UTC_TO_HOUR_MAPPING = {
  0: '12a',
  1: '1a',
  2: '2a',
  3: '3a',
  4: '4a',
  5: '5a',
  6: '6a',
  7: '7a',
  8: '8a',
  9: '9a',
  10: '10a',
  11: '11a',
  12: '12p',
  13: '1p',
  14: '2p',
  15: '3p',
  16: '4p',
  17: '5p',
  18: '6p',
  19: '7p',
  20: '8p',
  21: '9p',
  22: '10p',
  23: '11p'
};

export enum USER_ACTION_TYPE {
  QUIZ = 'QUIZ',
  SESSION = 'SESSION',
  ACCOUNT = 'ACCOUNT'
}

export enum USER_ACTION {
  QUIZ_STARTED = 'STARTED QUIZ',
  QUIZ_PASSED = 'PASSED QUIZ',
  QUIZ_FAILED = 'FAILED QUIZ',
  QUIZ_VIEWED_MATERIALS = 'VIEWED REVIEW MATERIALS',
  QUIZ_UNLOCKED_SUBJECT = 'UNLOCKED SUBJECT',
  SESSION_REQUESTED = 'REQUESTED SESSION',
  SESSION_JOINED = 'JOINED SESSION',
  SESSION_REJOINED = 'REJOINED SESSION',
  SESSION_ENDED = 'ENDED SESSION',
  SESSION_REPLIED_YES = 'REPLIED YES TO TEXT',
  ACCOUNT_CREATED = 'CREATED',
  ACCOUNT_UPDATED_AVAILABILITY = 'UPDATED AVAILABILITY',
  ACCOUNT_UPDATED_PROFILE = 'UPDATED PROFILE',
  ACCOUNT_ADDED_PHOTO_ID = 'ADDED PHOTO ID',
  ACCOUNT_ADDED_REFERENCE = 'ADDED REFERENCE',
  ACCOUNT_COMPLETED_BACKGROUND_INFO = 'COMPLETED BACKGROUND INFORMATION',
  ACCOUNT_DELETED_REFERENCE = 'DELETED REFERENCE',
  ACCOUNT_APPROVED = 'APPROVED',
  ACCOUNT_ONBOARDED = 'ONBOARDED',
  ACCOUNT_SUBMITTED_REFERENCE_FORM = 'SUBMITTED REFERENCE FORM',
  ACCOUNT_REJECTED_PHOTO_ID = 'REJECTED PHOTO ID',
  ACCOUNT_REJECTED_REFERENCE = 'REJECTED REFERENCE',
  ACCOUNT_BANNED = 'BANNED'
}

export enum USER_BAN_REASON {
  NON_US_SIGNUP = 'NON US SIGNUP',
  BANNED_IP = 'USED BANNED IP',
  SESSION_REPORTED = 'SESSION REPORTED',
  BANNED_SERVICE_PROVIDER = 'BANNED SERVICE PROVIDER'
}

export enum IP_ADDRESS_STATUS {
  OK = 'OK',
  BANNED = 'BANNED'
}

export const INTEGRATED_MATH_MAPPING = {
  integratedmathone: 'integratedMathOne',
  integratedmathtwo: 'integratedMathTwo',
  integratedmaththree: 'integratedMathThree',
  integratedmathfour: 'integratedMathFour'
};

export const FORMAT_INTEGRATED_MATH = {
  integratedMathOne: 'Integrated Math 1',
  integratedMathTwo: 'Integrated Math 2',
  integratedMathThree: 'Integrated Math 3',
  integratedMathFour: 'Integrated Math 4'
};

export const PHYSICS_MAPPING = {
  physicsone: 'physicsOne'
};

export const FORMAT_PHYSICS = {
  physicsOne: 'Physics 1'
};

export enum STATUS {
  SUBMITTED = 'SUBMITTED',
  REJECTED = 'REJECTED',
  APPROVED = 'APPROVED'
}

export enum PHOTO_ID_STATUS {
  EMPTY = 'EMPTY',
  SUBMITTED = 'SUBMITTED',
  REJECTED = 'REJECTED',
  APPROVED = 'APPROVED'
}

export enum REFERENCE_STATUS {
  UNSENT = 'UNSENT',
  SENT = 'SENT',
  SUBMITTED = 'SUBMITTED',
  REJECTED = 'REJECTED',
  APPROVED = 'APPROVED'
}

export const SESSION_REPORT_REASON = {
  STUDENT_RUDE: 'Student was rude',
  STUDENT_MISUSE: 'Student was misusing platform'
};

export enum TRAINING {
  UPCHIEVE_101 = 'upchieve101',
  TUTORING_SKILLS = 'tutoringSkills',
  COLLEGE_COUNSELING = 'collegeCounseling',
  SAT_STRATEGIES = 'satStrategies',
  COLLEGE_SKILLS = 'collegeSkills'
}

export enum MATH_CERTS {
  PREALGREBA = 'prealgebra',
  ALGEBRA = 'algebra',
  GEOMETRY = 'geometry',
  TRIGONOMETRY = 'trigonometry',
  PRECALCULUS = 'precalculus',
  CALCULUS_AB = 'calculusAB',
  CALCULUS_BC = 'calculusBC',
  STATISTICS = 'statistics'
}

export const MATH_SUBJECTS = {
  PREALGREBA: 'prealgebra',
  ALGEBRA_ONE: 'algebraOne',
  ALGEBRA_TWO: 'algebraTwo',
  GEOMETRY: 'geometry',
  TRIGONOMETRY: 'trigonometry',
  PRECALCULUS: 'precalculus',
  CALCULUS_AB: 'calculusAB',
  CALCULUS_BC: 'calculusBC',
  STATISTICS: 'statistics',
  INTEGRATED_MATH_ONE: 'integratedMathOne',
  INTEGRATED_MATH_TWO: 'integratedMathTwo',
  INTEGRATED_MATH_THREE: 'integratedMathThree',
  INTEGRATED_MATH_FOUR: 'integratedMathFour'
};

export enum SCIENCE_CERTS {
  BIOLOGY = 'biology',
  CHEMISTRY = 'chemistry',
  PHYSICS_ONE = 'physicsOne',
  PHYSICS_TWO = 'physicsTwo',
  ENVIRONMENTAL_SCIENCE = 'environmentalScience'
}
export const SCIENCE_SUBJECTS = {
  BIOLOGY: 'biology',
  CHEMISTRY: 'chemistry',
  PHYSICS_ONE: 'physicsOne',
  PHYSICS_TWO: 'physicsTwo',
  ENVIRONMENTAL_SCIENCE: 'environmentalScience'
};

export enum COLLEGE_CERTS {
  ESSAYS = 'essays',
  FINANCIAL_AID = 'financialAid',
  SPORTS_RECRUITMENT_PLANNING = 'sportsRecruitmentPlanning'
}

export const COLLEGE_SUBJECTS = {
  ESSAYS: 'essays',
  FINANCIAL_AID: 'financialAid',
  SPORTS_RECRUITMENT_PLANNING: 'sportsRecruitmentPlanning',
  PLANNING: 'planning',
  APPLICATIONS: 'applications'
};

export enum SAT_CERTS {
  SAT_MATH = 'satMath',
  SAT_READING = 'satReading'
}

export const SAT_SUBJECTS = {
  SAT_MATH: 'satMath',
  SAT_READING: 'satReading'
};

export const SUBJECTS = {
  ...MATH_SUBJECTS,
  ...SCIENCE_SUBJECTS,
  ...COLLEGE_SUBJECTS,
  ...SAT_SUBJECTS
};

export const CERT_UNLOCKING = {
  [MATH_CERTS.CALCULUS_BC]: [
    MATH_SUBJECTS.CALCULUS_BC,
    MATH_SUBJECTS.CALCULUS_AB,
    MATH_SUBJECTS.PRECALCULUS,
    MATH_SUBJECTS.TRIGONOMETRY,
    MATH_SUBJECTS.ALGEBRA_ONE,
    MATH_SUBJECTS.ALGEBRA_TWO,
    MATH_SUBJECTS.PREALGREBA
  ],
  [MATH_CERTS.CALCULUS_AB]: [
    MATH_SUBJECTS.CALCULUS_AB,
    MATH_SUBJECTS.PRECALCULUS,
    MATH_SUBJECTS.TRIGONOMETRY,
    MATH_SUBJECTS.ALGEBRA_ONE,
    MATH_SUBJECTS.ALGEBRA_TWO,
    MATH_SUBJECTS.PREALGREBA
  ],
  [MATH_CERTS.PRECALCULUS]: [
    MATH_SUBJECTS.PRECALCULUS,
    MATH_SUBJECTS.TRIGONOMETRY,
    MATH_SUBJECTS.ALGEBRA_ONE,
    MATH_SUBJECTS.ALGEBRA_TWO,
    MATH_SUBJECTS.PREALGREBA
  ],
  [MATH_CERTS.TRIGONOMETRY]: [MATH_SUBJECTS.TRIGONOMETRY],
  [MATH_CERTS.ALGEBRA]: [
    MATH_SUBJECTS.ALGEBRA_ONE,
    MATH_SUBJECTS.ALGEBRA_TWO,
    MATH_SUBJECTS.PREALGREBA
  ],
  [MATH_CERTS.PREALGREBA]: [MATH_SUBJECTS.PREALGREBA],
  [MATH_CERTS.STATISTICS]: [MATH_SUBJECTS.STATISTICS],
  [MATH_CERTS.GEOMETRY]: [MATH_SUBJECTS.GEOMETRY],
  [SCIENCE_CERTS.BIOLOGY]: [SCIENCE_SUBJECTS.BIOLOGY],
  [SCIENCE_CERTS.CHEMISTRY]: [SCIENCE_SUBJECTS.CHEMISTRY],
  [SCIENCE_CERTS.PHYSICS_ONE]: [SCIENCE_SUBJECTS.PHYSICS_ONE],
  [SCIENCE_CERTS.PHYSICS_TWO]: [SCIENCE_SUBJECTS.PHYSICS_TWO],
  [SCIENCE_CERTS.ENVIRONMENTAL_SCIENCE]: [
    SCIENCE_SUBJECTS.ENVIRONMENTAL_SCIENCE
  ],
  [COLLEGE_CERTS.ESSAYS]: [COLLEGE_SUBJECTS.ESSAYS],
  // @note: move applications and planning to computed certs once College Counseling is added
  [COLLEGE_SUBJECTS.APPLICATIONS]: [COLLEGE_SUBJECTS.APPLICATIONS],
  [COLLEGE_SUBJECTS.PLANNING]: [COLLEGE_SUBJECTS.PLANNING],
  [COLLEGE_CERTS.FINANCIAL_AID]: [COLLEGE_SUBJECTS.FINANCIAL_AID],
  [COLLEGE_CERTS.SPORTS_RECRUITMENT_PLANNING]: [
    COLLEGE_SUBJECTS.SPORTS_RECRUITMENT_PLANNING
  ],
  [SAT_CERTS.SAT_MATH]: [SAT_CERTS.SAT_MATH],
  [SAT_CERTS.SAT_READING]: [SAT_CERTS.SAT_READING],
  [TRAINING.COLLEGE_COUNSELING]: [SUBJECTS.PLANNING, SUBJECTS.APPLICATIONS]
};

export const COMPUTED_CERTS = {
  [SUBJECTS.INTEGRATED_MATH_ONE]: [
    // @note: Algebra unlocks both Algebra 1 and Algebra 2, either or can be used to compute Integrated Math
    SUBJECTS.ALGEBRA_ONE,
    MATH_CERTS.GEOMETRY,
    MATH_CERTS.STATISTICS
  ],
  [SUBJECTS.INTEGRATED_MATH_TWO]: [
    SUBJECTS.ALGEBRA_ONE,
    MATH_CERTS.GEOMETRY,
    MATH_CERTS.STATISTICS,
    MATH_CERTS.TRIGONOMETRY
  ],
  [SUBJECTS.INTEGRATED_MATH_THREE]: [
    MATH_CERTS.PRECALCULUS,
    MATH_CERTS.STATISTICS
  ],
  [SUBJECTS.INTEGRATED_MATH_FOUR]: [MATH_CERTS.PRECALCULUS],
  // Calculus AB, Calculus BC, or Precalculus can also unlock SAT Math
  [SUBJECTS.SAT_MATH]: [
    SUBJECTS.ALGEBRA_ONE,
    MATH_CERTS.TRIGONOMETRY,
    MATH_CERTS.GEOMETRY
  ]
  // @note: temporarily hide these computed certs for when the college counseling course is added
  // [SUBJECTS.PLANNING]: [TRAINING.COLLEGE_COUNSELING],
  // [SUBJECTS.APPLICATIONS]: [TRAINING.COLLEGE_COUNSELING]
};

export enum SUBJECT_TYPES {
  MATH = 'math',
  SCIENCE = 'science',
  COLLEGE = 'college',
  SAT = 'sat',
  TRAINING = 'training'
}

export const CALCULUS_MAPPING = {
  calculusbc: MATH_SUBJECTS.CALCULUS_BC,
  calculusab: MATH_SUBJECTS.CALCULUS_AB
};

export const FORMAT_CALCULUS = {
  [MATH_SUBJECTS.CALCULUS_BC]: 'Calculus BC',
  [MATH_SUBJECTS.CALCULUS_AB]: 'Calculus AB'
};

export const ALGEBRA_MAPPING = {
  algebraone: MATH_SUBJECTS.ALGEBRA_ONE,
  algebratwo: MATH_SUBJECTS.ALGEBRA_TWO
};

export const FORMAT_ALGEBRA = {
  [MATH_SUBJECTS.ALGEBRA_ONE]: 'Algebra 1',
  [MATH_SUBJECTS.ALGEBRA_TWO]: 'Algebra 2'
};

export enum SURVEY_TYPES {
  STUDENT_PRESESSION = 'student pre-session',
  STUDENT_POSTSESSION = 'student post-session'
}
