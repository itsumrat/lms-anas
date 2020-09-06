import viewActions from 'modules/shared/view/viewActions';
import EducDirectorService from 'modules/educDirector/educDirectorService';

const prefix = 'EducDirector_VIEW';

export default viewActions({
    prefix,
    findFn: EducDirectorService.find,
    redirectToOnError: '/educDirector',
});