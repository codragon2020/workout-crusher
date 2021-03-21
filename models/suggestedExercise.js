const chalk = require("chalk");
const seeds = [
  {
    exercise: "Walking",
    description: "Walk at a brisk pace for 45 min to 1 hr",
    photoURL:
      "https://global-uploads.webflow.com/5ca5fe687e34be0992df1fbe/5dafe4081c03a70f3d7a60d7_fitwalk2.jpeg",
    category: "Cardio"
  },
  {
    exercise: "Running",
    description: "Jog for 20-30 minutes at a moderate pace",
    photoURL:
      "https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/1036780592-1280x720.jpg?itok=wNUKvmCd",
    category: "Cardio"
  },
  {
    exercise: "Pull Ups",
    description: "Complete 3 sets of 5 pull ups to target your lats and biceps",
    photoURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh0418-fit-pul-01-1558554157.jpg?crop=0.750xw:1.00xh;0.250xw,0&resize=980:*",
    category: "Resistance"
  },
  {
    exercise: "Sit Ups",
    description: "Complete three sets of 8 sit up to gain abdominal strength.",
    photoURL:
      "https://media.gq.com/photos/580a26d7aafbc05a239a57f7/master/w_1600%2Cc_limit/sit-up-butt.jpg",
    category: "Resistance"
  },
  {
    exercise: "Push Ups",
    description: "Complete 3 sets of 10 sit up to work out your triceps.",
    photoURL:
      "https://assets.gqindia.com/photos/5cee7eb00379a73d25177759/master/pass/Pushup.jpg",
    category: "Resistance"
  },
  {
    exercise: "Lunges",
    description:
      "Complete 3 sets of 5 lunges on each leg for a lower body workout.",
    photoURL:
      "https://images.ctfassets.net/90pc6zknij8o/wNmQUKQQSkuOb4nOuHTZ6/f925977a47b6c222e9be1209135bcfbb/how-to-do-lunges.jpg?w=1200&h=630&fl=progressive&q=50&fit=fill&f=faces",
    category: "Resistance"
  },
  {
    exercise: "Squats",
    description: "Complete 3 sets of 12-15 squats to get a great leg workout.",
    photoURL:
      "https://homegymbuild.com/wp-content/uploads/2019/07/simple-exercise-ball-squat.jpg",
    category: "Resistance"
  },
  {
    exercise: "Crescent Lunge",
    description: "Hold for 5 breaths on each leg to help stretch your legs.",
    photoURL:
      "https://media.self.com/photos/5b7c4e6d3327c070925be48d/master/w_1600%2Cc_limit/crescent-lunge-beginner-yoga.jpg",
    category: "Yoga"
  },
  {
    exercise: "Plank",
    description: "Complete 3 sets of holding for 30 seconds.",
    photoURL:
      "https://www.silversneakers.com/wp-content/uploads/2019/08/SSBlog_PlankVariation_700x525.jpg",
    category: "Resistance"
  },
  {
    exercise: "Bridge",
    description: "Complete 3 sets of 10 sit up to gain abdominal strenghth.",
    photoURL:
      "https://post.healthline.com/wp-content/uploads/sites/2/2020/06/GRT_Bridge_Pose_Yoga-1200x628-Facebook-1200x628.jpg",
    category: "Resistance"
  }
];
module.exports = function(sequelize, DataTypes) {
  const Daily = sequelize.define("Daily", {
    exercise: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    photoURL: {
      type: DataTypes.STRING
    },

    category: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Daily.sync();
  Daily.findAll().then(results => {
    if (results.length === 0) {
      console.log(chalk.red.bgCyan.bold("Creating seeds"));
      // eslint-disable-next-line array-callback-return
      seeds.map(seed => {
        Daily.create(seed);
        console.log(chalk.cyan(`Load: ${seed.exercise}`));
      });
    } else {
      console.log(chalk.bgRed("Using existing seeds"));
    }
  });
  Daily.sync();

  return Daily;
};
