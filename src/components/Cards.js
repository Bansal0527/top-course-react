import Card from './Card.js'


const Cards = ({courses}) => {
    let allCourses = [];
    // single array mei daalna h couses ko
    const getCourses = () => {
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course);
            })
        })
        return allCourses;
    } 



    return(
        <div>
            {}
            {
            getCourses().map((course) => {
               return <Card key={course.id} course={course}/>
            })
        }
        </div>
    )
}
export default Cards