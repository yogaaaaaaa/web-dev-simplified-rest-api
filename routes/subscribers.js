const express = require("express");
const router = express.Router();

// getting all
router.get('/', (req, res)=>{
    res.send('hello world!')

})

// getting one
router.get('/:id', (req, res)=>{

    
})

// creating one
router.post('/', (req, res)=>{

    
})

// getting all
router.patch('/:id', (req, res)=>{

    
})

// getting all
router.delete('/', (req, res)=>{

    
})

module.exports = router;
