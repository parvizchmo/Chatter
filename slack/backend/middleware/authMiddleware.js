export const protectRoute = (req,res,next)=>{
    if(!req.auth().isAuthenticated()){
        return res.status(401).send('Not authorized');
    }
    next
}