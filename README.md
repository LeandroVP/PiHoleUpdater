# PiHoleUpdater
PiHole is a "DNS black hole" that prevents the devices connected to a network to obtain ip addresses listed on a blacklist. We aim to create a cloud service that provides updated lists to PiHole machines on demand.

Users should be able to do the following actions when the final state of development is reached:

- [Get a black list (US1)](https://github.com/LeandroVP/PiHoleUpdater/issues/6)
- [Insert a new element into a black list (US2)](https://github.com/LeandroVP/PiHoleUpdater/issues/7)
- [Add a complete new black list (US3)](https://github.com/LeandroVP/PiHoleUpdater/issues/8)

# Technologies

We will use Typescript as a programming language. It is one of the most used languages in microservices and SPA's such as Angular. For the backend we will use Node.js.
[LoopBack 4](https://loopback.io/) is a very interesting framework that might be used because it combines Node.js and typescript to help to develop microservices.

# Instalation
- Clone the repository and open a terminal.
- Compile the typescript file into javascript:
´npx tsc´
- Execute the generated file with node :
´node ./build/index.js´

# Execution

To properly execute the scripts, it is necessary to install nodemon and rimraf. 
Nodemon will provide a cold reloading utility and rimraf will clean the directory on each run.
To start the application, execute 
 > npm run start


[Documentation](./docs/documentation.md)
