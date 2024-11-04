// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {id: 12345, name: "Fundamentals of JavaScript",course_id: 451,group_weight: 25,
    assignments: [
    {id: 1,name: "Declare a Variable",due_at: "2023-01-25",points_possible: 50},
    {id: 2,name: "Write a Function",due_at: "2023-02-27",points_possible: 150},
    {id: 3,name: "Code the World",due_at: "3156-11-15",points_possible: 500}
    ]
};

// The provided learner submission data.
const LearnerSubmissions = [
    {learner_id: 125,assignment_id: 1,submission: {submitted_at: "2023-01-25",score: 47}},
    {learner_id: 125,assignment_id: 2,submission: {submitted_at: "2023-02-12",score: 150}},
    {learner_id: 125,assignment_id: 3,submission: {submitted_at: "2023-01-25", score: 400}},
    {learner_id: 132, assignment_id: 1,submission: {submitted_at: "2023-01-24",score: 39}},
    {learner_id: 132, assignment_id: 2,submission: {submitted_at: "2023-03-07", score: 140}}
    ];

function parseDate(date) {
    return new Date(date);
}
// console.log(parseDate(LearnerSubmissions[0].submission.submitted_at))

function getLearnerData(course, assignmentGroup, submissions) {
    if(assignmentGroup.course_id !== course.id) {
        throw new Error("Assignment Group does not belong to the Course Info");
    }
    
    const todaysDate = new Date();
    const assignmentMap = {};

    assignmentGroup.assignments.forEach(assignment => {
        // console.log(assignment.due_at)
        if(parseDate(assignment.due_at) < todaysDate) {
            assignmentMap[assignment.id] = assignment;
        }
    })
    // console.log(assignmentMap)
    const learners = {};

    submissions.forEach(sub => {
        const learnerID = sub.learner_id;
        const assignmentID = sub.assignment_id;
        const submission = sub.submission;

        if(!(assignmentID in assignmentMap)) {
            return;
        }
        
    })
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);