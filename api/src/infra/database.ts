import mongoose from 'mongoose'

export const connect = () => {
  try {
    mongoose.connect(
      'mongodb+srv://markus90souza:U8PsLCOlNOZeTwJW@herotickets.tprzmds.mongodb.net/herotickets',
    )

    console.log('connectou o banco')
  } catch (error) {
    console.log(error)
  }
}
