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
      name: "Skywhiskers",
      description:
        "Wall flower cat who enjoys the slinking in the background.  Takes care of herself, you never saw this cat... Secret Ability: High Jump",
      species: "Cat",
      profilepicture: "https://i.imgur.com/C6Fkmp2.jpg",
      licks: 8
    }).then(pet => {
      Promise.all([
        Comment.create({
          message: "The fridge looks high, lemme get on top!"
        }).then(comment => {
          pet.comments.push(comment);
        })
      ]).then(() => {
        pet.save(err => console.log(err));
      });
    });

    Pet.create({
      name: "Snowflake",
      description:
        "Snowflake is skiddish and loves to get what she wants.  Be careful, she will bite or scratch even if you are taking care of her. If you can get her to sit on your lap or chest, she likes you.",
      species: "Cat",
      profilepicture: "https://i.imgur.com/3O7LHej.jpg",
      licks: 6
    }).then(pet => {
      Promise.all([
        Comment.create({
          message: "I'm hungry."
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
      profilepicture: "https://i.imgur.com/3n7t9vy.jpg",
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

    Pet.create({
      name: "Harvey",
      description:
        "Ohhhhh lawd he comin'. Harvey is currently on a diet so that one day he might be slightly less chonky, but currently he is 18 pounds of pure floof.",
      species: "Cat",
      profilepicture: "https://i.imgur.com/AjTm5szg.jpg",
      licks: 3
    });

    Pet.create({
      name: "Josie",
      description:
        "Call me Jo-Jo! My hobbies include eating, sleeping, and making my dad carry me around places.",
      species: "Dog",
      profilepicture: "https://i.imgur.com/bypyQpG.jpg",
      licks: 7
    });

    Pet.create({
      name: "Buddy",
      description:
        "Buddy is a beagle with a lot of chub to love. If you are in the habit of body-shaming dogs, then sashay away, because Buddy accepts good vibes only (and treats).",
      species: "Dog",
      profilepicture: "https://i.imgur.com/jsoiRHr.jpg",
      licks: 7
    });
    Pet.create({
      name: "Eddie",
      description:
        "Eddie is no longer in this corporeal realm, but in life he loved funny hats, being a big brother to Harvey, and drinking from his fancy water fountain. He was also a fan of gentle nose boops.",
      species: "Cat",
      profilepicture: "https://i.imgur.com/Z1ZmDFk.jpg",
      licks: 2
    });
    Pet.create({
      name: "Shelley",
      description:
        "WHOZA GOOD GIRL WHOZA GOOD GIRL ITS SHELLEY ITS ME I AM SHELLEY",
      species: "Dog",
      profilepicture: "https://i.imgur.com/r7Ydke3.jpg",
      licks: 12
    });

    Pet.create({
      name: "Duke",
      description:
        "Duke is a noble, dignified beast who deserves more than being stuck in tasteless Halloween costumes, but alack.",
      species: "Dog",
      profilepicture: "https://i.imgur.com/2o6mgzE.jpg",
      licks: 5
    });

    Pet.create({
      name: "Griffin",
      description:
        "Call me Finn! I'm a tiny little boy who's growing sooooo much. I also have white socks and love to chase things.",
      species: "Cat",
      profilepicture: "https://i.imgur.com/4IFVC3l.jpg",
      licks: 7
    });
    Pet.create({
      name: "Renly",
      description:
        "Is it possible to tire out the future King of Westeros? Absolutely not! He just wants to play play play all day.",
      species: "Dog",
      profilepicture: "https://i.imgur.com/wqhDS3l.jpg",
      licks: 1
    });
    Pet.create({
      name: "Bear",
      description: "I love long walks and long showers",
      species: "Dog",
      profilepicture: "https://i.imgur.com/YhT6wD7b.jpg",
      licks: 15
    });
    Pet.create({
      name: "Tiger",
      description:
        "See the look in my eyes? Yeah, be very afraid. I'm the boss in my house",
      species: "Cat",
      profilepicture: "https://i.imgur.com/tZ96xzN.jpg",
      licks: 9
    });
  });
});
