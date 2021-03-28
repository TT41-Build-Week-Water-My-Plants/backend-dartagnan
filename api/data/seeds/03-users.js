exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { username: "dart", password: "123", phone_number: "1231231234" },
        { username: "jamie", password: "123", phone_number: "1231231234" },
        { username: "rick", password: "123", phone_number: "1231231234" },
      ]);
    });
};
