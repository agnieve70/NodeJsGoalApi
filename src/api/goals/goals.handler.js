let GoalModel = require('./goals.model');

exports.createOne = async (req, res, next) => {
   const detailsData = new GoalModel(req.body);

   detailsData.save()
      .then(result => {
         res.status(201).json(result);
      })
      .catch(err => {
         next(err);
      });
}

exports.updateOne = async (req, res, next) => {

   const id = req.params.id;
   const goal = req.body.goal;

   try {
      const result = await GoalModel.updateOne({
         _id: id
      }, {goal : goal})
   
      if(result.matchedCount === 0) throw Error('No Goal Found');
      if(result.modifiedCount === 0) throw Error('No need to modify');

      res.status(200);
      res.json({'message': 'Goal Successfully Updated', 'goal': {_id : id, goal: goal}});

   } catch (error) {
      next(error);
   }
}

exports.deleteOne = async (req, res, next) => {

   const id = req.params.id;

   try {
      const result = await GoalModel.deleteOne({_id : id});

      if(result.deletedCount === 0 ) throw Error('Nothing to delete');

      res.status(200);
      res.json({"message": "Successfully Deleted Data"});
      
   } catch (error) {
      next(error);
   }
}

exports.findOne = async (req, res, next) => {

   const id = req.params.id;

   try {
      const goals = await GoalModel.find({_id: id});
      if(goals.length === 0) throw Error('No Goal Found');

      res.status(200);
      res.json({"message": "Successfully Fetched Data", "goals": goals});
   } catch (error) {
      next(error);
   }
}

exports.findAll = async (req, res, next) => {

   try {
      const goals = await GoalModel.find({});
      res.status(200);
      res.json({"message": "Successfully Fetched Data", "goals": goals});
   } catch (error) {
      next(error);
   }
}