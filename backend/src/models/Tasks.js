/*
coleccion: Providers
campos:
 Titulo 
 descripcion
 completed
 */

 import { Schema, model} from "mongoose"

 const TasksSchema = new Schema(
    {
        title: {
            type: String
        },
        description:{
            type: String
            
        },
        completed:{
            type: Boolean
        }
    },{
        timestamps: true,
        strict: false
    }
 )
 export default model ("tasks", TasksSchema)