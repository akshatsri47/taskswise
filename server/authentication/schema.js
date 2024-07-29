import z from 'zod';
const loginschema = z.object({
     username:z.string(),
     email:z.string().email(),
     password:z.string()

});

export const taskschema = z.object({
    
})
export  default loginschema;