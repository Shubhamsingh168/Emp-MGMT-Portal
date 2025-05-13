
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    taskCount: {
      active: 1,
      new: 1,
      accepted: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Fix login bug",
        description: "Resolve the issue with user login validation.",
        date: "2025-04-18",
        category: "Development",
        active: true,
        new: false,
        accepted: 1,
        completed: false,
        failed: false
      },
      {
        title: "Update README",
        description: "Add setup instructions to the project README.",
        date: "2025-04-17",
        category: "Documentation",
        active: false,
        new: true,
        accepted: 1,
        completed: false,
        failed: false
      },
      {
        title: "Code review",
        description: "Review PR #42 and leave feedback.",
        date: "2025-04-15",
        category: "Code Review",
        active: false,
        new: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Diya",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      new: 1,
      accepted: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Design dashboard UI",
        description: "Create mockups for the new admin dashboard.",
        date: "2025-04-20",
        category: "Design",
        active: true,
        new: true,
        accepted: 1,
        completed: false,
        failed: false
      },
      {
        title: "Client call",
        description: "Discuss project progress with client.",
        date: "2025-04-16",
        category: "Communication",
        active: false,
        new: false,
        accepted: 1,
        completed: true,
        failed: false
      },
      {
        title: "Team sync-up",
        description: "Attend weekly team meeting.",
        date: "2025-04-15",
        category: "Meeting",
        active: false,
        new: false,
        accepted: 1,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Kabir",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 2,
      new: 1,
      accepted: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Optimize database",
        description: "Improve the performance of SQL queries.",
        date: "2025-04-17",
        category: "Database",
        active: true,
        new: true,
        accepted: 1,
        completed: false,
        failed: false
      },
      {
        title: "Bug triage",
        description: "Categorize and assign new bug reports.",
        date: "2025-04-18",
        category: "Management",
        active: false,
        new: false,
        accepted: 1,
        completed: true,
        failed: false
      },
      {
        title: "Backend unit tests",
        description: "Write tests for the payment service.",
        date: "2025-04-14",
        category: "Testing",
        active: false,
        new: false,
        accepted: 1,
        completed: false,
        failed: true
      },
      {
        title: "Add API docs",
        description: "Document new endpoints in the API reference.",
        date: "2025-04-13",
        category: "Documentation",
        active: false,
        new: false,
        accepted: 1,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Meera",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      new: 1,
      accepted: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Deploy to staging",
        description: "Push latest features to the staging environment.",
        date: "2025-04-19",
        category: "DevOps",
        active: true,
        new: false,
        accepted: 2,
        completed: false,
        failed: false
      },
      {
        title: "Research WebSockets",
        description: "Prepare a report on real-time communication solutions.",
        date: "2025-04-17",
        category: "Research",
        active: false,
        new: true,
        accepted: 1,
        completed: false,
        failed: false
      },
      {
        title: "Fix notification bug",
        description: "Resolve issues with delayed notifications.",
        date: "2025-04-15",
        category: "Bug Fix",
        active: false,
        new: false,
        accepted: 1,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Rohan",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 3,
      new: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Write blog post",
        description: "Share project learnings in a company blog post.",
        date: "2025-04-16",
        category: "Content",
        active: true,
        new: true,
        completed: false,
        failed: false
      },
      {
        title: "Update dependencies",
        description: "Upgrade project packages to latest versions.",
        date: "2025-04-18",
        category: "Maintenance",
        active: false,
        new: false,
        completed: true,
        failed: false
      },
      {
        title: "Prepare demo",
        description: "Set up a working demo for client presentation.",
        date: "2025-04-14",
        category: "Presentation",
        active: false,
        new: false,
        completed: false,
        failed: true
      },
      {
        title: "UX feedback",
        description: "Collect usability feedback from testers.",
        date: "2025-04-13",
        category: "User Testing",
        active: false,
        new: false,
        completed: true,
        failed: false
      }
    ]
  }
];
  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
  ];

export const setLocalStorage = () => {
 
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
  
};
export const getLocalStorage = () => {
    const employeesData = JSON.parse(localStorage.getItem("employees"));
    const adminData = JSON.parse(localStorage.getItem("admin"));
    
    // console.log("Employees Data:", employeesData); // Will show array of objects
    // console.log("Admin Data:", adminData); // Will show single object in array

    return {employees,admin}
  };
  