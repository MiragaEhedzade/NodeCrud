var referenceUserModel = {
    user_name: 
    {
      type: String,
      isRequired: true
    },
    password: {
      type: String,
      isRequired: true
    },
    active: {
      type: Number,
      isRequired: true
    },
    create_time: {
        type: Number,
        isRequired: true
    },
    modify_time: {
        type: Number,
        isRequired: true
    },
}

module.exports = referenceUserModel 