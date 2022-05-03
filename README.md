# Tamagotchi

The project was created using **React** and **JavaScript**.

The game starts with giving a pet name. The program logic checks the correctness of the entered characters using **regular expressions**.

It is necessary to monitor the food indicator which decreases due to the implementation of the **useInterval hook**. The food indicator is realised using **Ant Design library**.

The pet can get sick accidentally. The sickness name are the **environment variables** and located in a **.env file**. If the pet is sick disease sets randomly. 
If the pet is not treated by pressing the treat button during a certain time, it dies.

When the pet die the modal window is appeared with a reason of death. 
The game could be restarted pressing the restart button.

The state is stored in a **local state** using **useState** and using **Context**.

The project contains tests that were writing using **Jest** and **React Testing Library**.


`npm start` - run the project in dev mode
`npm run test` - run all tests
 
