// properties in the array

// 1. course_title
// 2 . course_description
// 3. completed_status(In progress,just started, completed)
// 4. progress_rate(20,30,40,50,60,70,80,90,100)
// 5. Ends_data


const student_courses = [
    {
        id:1,
        course_title: 'Web development Fundamentals',
        course_description: 'Learn HTML, CSS, and Javascript basics to build moderm websites.',
        completed_status: 'In Progress',
        progress_rate: '65',
        end_date: 'Dec 15, 2025'
    },
    {
        id:2,
        course_title: 'React.js Development',
        course_description: 'Master React.js by building real-world applications and understanding core concepts.',
        completed_status: 'Completed',
        progress_rate: '90',
        end_date: 'Jan 30, 2025'
    },
    {
        id:3,
        course_title: 'UI/UX Design Principles',
        course_description: 'Learn design thinking, wireframing, and prototyping using modern tools.',
        completed_status: 'Just Started',
        progress_rate: '10',
        end_date: 'Feb 15, 2025'
    }

]


export default student_courses