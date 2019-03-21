const { Pet, Comment } = require("../models/pet");

Pet.deleteMany({}).then(() => {
  Comment.deleteMany({}).then(() => {
    Pet.create({
      name: "Ginger",
      description:
        "Ginger is a sweet old pup with sandy brown fur and the beginnings of a gray moustache. Her hobbies include napping, letting her dad carry her around the neighborhood, and watching HGTV. That said, by 'watching' she really means 'sleeping on the heated tile in the basement while HGTV plays mindlessly in the background.'",
      species: "Dog",
      profilepicture: "https://i.imgur.com/uxKvuLC.jpg",
      licks: 4
    }).then(pet => {
      Promise.all([
        Comment.create({ message: "I love to eat peanut butter!" }).then(
          comment => {
            pet.comments.push(comment);
          }
        ),
        Comment.create({
          message: "Woof woof woof, is this thing on?"
        }).then(comment => {
          pet.comments.push(comment);
        })
      ]).then(() => {
        pet.save(err => console.log(err));
      });
    });

    Pet.create({
      name: "Gouda",
      description:
        "Gouda is a bouncy pupper who's just so darn excited to be growing up. Much like his namesake, he's got a bit of a chip on his shoulder, but he means it all in good fun--he loves fun!",
      species: "Dog",
      profilepicture: "https://i.imgur.com/DqAaeM3.jpg",
      sociallink: "https://www.instagram.com/goudacheeseball/",
      licks: 10
    }).then(pet => {
      Promise.all([
        Comment.create({
          message: "I'm an Instagram celebrity!"
        }).then(comment => {
          pet.comments.push(comment);
        })
      ]).then(() => {
        pet.save(err => console.log(err));
      });
    });

    Pet.create({
      name: "Sassy",
      description:
        "Could there be a sassier dog than Sassy? Methinks not. Sassy loves wearing bows and bandanas, playing with her cat-brother Austin, and being the center of attention.",
      species: "Dog",
      profilepicture: "https://i.imgur.com/sw8R9Cg.jpg",
      sociallink: "https://www.instagram.com/sassythebabydog/",
      licks: 0
    });

    Pet.create({
      name: "Sadie",
      description:
        "My human is an instructor at General Assembly. I wish my human brought me to his workplace so I can spend time with his students. Oh you want to know about my cone? Beats me, you'll have to ask my human",
      species: "Dog",
      profilepicture: "https://i.imgur.com/CI3dv1m.jpg",
      licks: 8
    }).then(pet => {
      Promise.all([
        Comment.create({
          message:
            "Does anyone know when my human is going to come home. I'm ready for my walk."
        }).then(comment => {
          pet.comments.push(comment);
        })
      ]).then(() => {
        pet.save(err => console.log(err));
      });
    });

    Pet.create({
      name: "Amelia",
      description:
        "I'm a diva, I'm not going to lie. When I want to be petted, I mean it.",
      species: "Cat",
      profilepicture: "https://i.imgur.com/Abid2rf.jpg",
      licks: 2
    }).then(pet => {
      Promise.all([
        Comment.create({
          message: "I need to be petted RIGHT NOW."
        }).then(comment => {
          pet.comments.push(comment);
        })
      ]).then(() => {
        pet.save(err => console.log(err));
      });
    });

    Pet.create({
      name: "Flynn Rider",
      description: "So I hear I can go to work with my human. HAMMAD!!!",
      species: "Dog",
      profilepicture: "https://i.imgur.com/nkq3Hik.jpg",
      licks: 5
    });

    Pet.create({
      name: "Nala",
      description:
        "I'm the cutest puppy on this app period. Joey is the best human ever!!!",
      species: "Dog",
      profilepicture: "https://i.imgur.com/WAPBKWQ.jpg",
      licks: 10
    });

    Pet.create({
      name: "Murphy",
      description: "Hi friends! I live in Minnesota and I love the snow.",
      species: "Dog",
      profilepicture: "https://i.imgur.com/810Gb1K.png",
      sociallink: "https://www.instagram.com/murph.dood/?hl=en",
      licks: 9
    });

    Pet.create({
      name: "Basil",
      description:
        "I'm Basil- a Maine Coon rescue. Still working on training my humans, who named me after their favorite bourbon!",
      species: "Cat",
      profilepicture: "https://i.imgur.com/q3CYyji.jpg",
      sociallink: "https://www.instagram.com/basilbourboncat",
      licks: 9
    });
  });
});
