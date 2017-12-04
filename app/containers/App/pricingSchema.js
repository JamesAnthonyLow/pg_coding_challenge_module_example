export default {
  base: {
    type: 'base',
    rules: {
      cost: 100,
    },
  },
  age: {
    type: 'integer',
    rules: {
      bottom_limit: 18,
      bracket: {
        start: 18,
        interval: 5,
        amount: 20,
      },
    },
  },
  hasAllergies: {
    type: 'boolean',
    rules: {
      true: {
        percent_increase: 1,
      },
    },
  },
  hasSleepApnea: {
    type: 'boolean',
    rules: {
      true: {
        percent_increase: 6,
      },
    },
  },
  hasHeartDisease: {
    type: 'boolean',
    rules: {
      true: {
        percent_increase: 17,
      },
    },
  },
  gender: {
    type: 'category',
    rules: {
      category_discount: {
        type: 'flat',
        fields: {
          male: 0,
          female: 12,
        },
      },
    },
  },
};
