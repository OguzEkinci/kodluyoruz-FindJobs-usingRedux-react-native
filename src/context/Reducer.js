export default function (state, action) {
  switch (action.type) {
    case 'ADD_FAVORITE_JOB':
      return {
        ...state,
        favoritedJobs: [...state.favoritedJobs, action.payload.favJobsObject], //favJobsObject i kendimiz belirledikr herhangi bir yerde tanımlı değil
      };
    case 'DELETE_FAVORITE_JOB':
      return {
        ...state,
        favoritedJobs: action.payload.deletingFav, //favJobsObject i kendimiz belirledikr herhangi bir yerde tanımlı değil
      };
    case 'VIEW_JOBS':
      return {
        ...state,
        jobs: action.payload.jobsObject, //jobsObject i kendimiz belirledik herhangi bir yerde tanımlı değil
      };

    default:
      return state;
  }
}
