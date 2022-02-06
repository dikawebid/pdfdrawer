var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/dikawebid/pdfdrawer.git', // Update to point to your repository  
        user: {
            name: 'Ferdhika Yudira', // update to use your name
            email: 'rpl4rt08@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)