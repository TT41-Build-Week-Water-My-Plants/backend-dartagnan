exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("plants")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("plants").insert([
        {
          nickname: "Petey",
          species: "Venus Fly Trap",
          h2o_frequency: "12pm every day",
          image:
            "https://cdn.shopify.com/s/files/1/0071/7540/5626/products/DIO-MUS-DEN-2_600x600.jpg?v=1527970535",
        },
        {
          nickname: "Don",
          species: "String of Dolphins",
          h2o_frequency: "9am every morning",
          image:
            "https://cdn11.bigcommerce.com/s-ca41wpfzci/images/stencil/1280x1280/products/555/1199/Senecio-String-Dolphins-02__71709.1560212946.jpg?c=2",
        },
        {
          nickname: "Spiderman",
          species: "Spider Plant",
          h2o_frequency: "8am and 8pm every day",
          image:
            "https://cdn.shopify.com/s/files/1/0212/1030/0480/products/spider-plant_2_560x560_crop_center.jpg?v=1616007405",
        },
      ]);
    });
};
