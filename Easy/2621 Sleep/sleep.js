/**
 * @param {number} millis
 */
const sleep = async (ms) =>  new Promise((resolve) => setTimeout(resolve,ms))


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */