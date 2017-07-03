import { createApp } from './app'
export default context => {
  const { app } = createApp()
  return app
}


// import { createApp } from './app'
// const { app } = createApp()
// export default context => {
// 	return new Promise((resolve, reject) => {
//         resolve(app);
//     });
// }