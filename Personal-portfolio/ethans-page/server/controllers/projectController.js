module.exports = {
    createProject: (req, res) => {
        const db = req.app.get('db')
        db.create_project({...req.body}).then(addedProjects => {
            console.log("--- added projects ", addedProjects)
            //TODO finish
        }).catch( error => {
            console.error('Error in createProject()', error);
        })
    }, 
    getAllProjects: (req, res) => {
        const db = req.app.get('db')

    }, 
    getProjectsForUser: (req, res) => {
        const { id } = req.params;
        const db = req.app.get('db')
        db.get_users_projects({id}).then(projects => {
            res.status(200).json(projects)
        }).catch( error => {
            console.log('Error in getProjectsForUser(), ', error)
            res.status(500).json({ message: 'An Error has occurred on the server'})
        })
    },
    getProject: (req, res) => { 

    }, 
    editProject: (req, res) => {

    },
    deleteProject: (req, res) => {

    }
}