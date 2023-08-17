const skills = [
    { "id": 1,
    "name": "Front-end Development",
    "description": "Creating interactive and user-friendly interfaces using HTML, CSS, and JavaScript.",
    "level": "Advanced",
    "yearsOfExperience": 1 },
    { "id": 2,
    "name": "Back-end Development",
    "description": "Building server-side logic and APIs using frameworks like Node.js, Express, and Django.",
    "level": "Intermediate",
    "yearsOfExperience": 1 },
    { "id": 3,
    "name": "Database Management",
    "description": "Designing, implementing, and optimizing databases using SQL (e.g., MySQL) and NoSQL (e.g., MongoDB).",
    "level": "Advanced",
    "yearsOfExperience": 1 },
    { "id": 4,
    "name": "Version Control",
    "description": "Managing code repositories, collaborating with teams, and tracking changes using Git and GitHub.",
    "level": "Advanced",
    "yearsOfExperience": 1 },
    { "id": 5,
    "name": "DevOps and Deployment",
    "description": "Setting up continuous integration, continuous deployment (CI/CD), and deploying applications to cloud platforms.",
    "level": "Intermediate",
    "yearsOfExperience": 1 },
    { "id": 6,
    "name": "Test-Driven Development",
    "description": "Writing tests before code to ensure code quality, using testing frameworks like Jest.",
    "level": "Intermediate",
    "yearsOfExperience": 1}
]

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}