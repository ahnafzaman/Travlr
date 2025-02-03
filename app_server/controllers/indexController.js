// module.exports.homePage = (req, res) => {
//     res.render('index', { title: 'Travlr Getaways Website Template' });
//   };

const fs = require('fs');
const path = require('path');

module.exports.homePage = (req, res) => {
    const tripsFilePath = path.join(__dirname, '../../trips.json');

    
    const tripsData = JSON.parse(fs.readFileSync(tripsFilePath, 'utf-8'));
    
    res.render('index', { 
        title: 'Travlr Getaways Website Template',
        trips: tripsData 
    });
};

  
