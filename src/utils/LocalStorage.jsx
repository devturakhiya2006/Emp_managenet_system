//localStorage.clear()
const emp = [
  {
    id: 1,
    firstName: "Aarav",
    email: "john.smith@example.com",
    password: "123",
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Sales Report",
        taskDescription: "Generate the monthly sales report.",
        taskDate: "2026-06-15",
        taskCategory: "Reporting"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Attend project discussion with client.",
        taskDate: "2026-06-16",
        taskCategory: "Meeting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update CRM",
        taskDescription: "Update customer records in CRM.",
        taskDate: "2026-06-10",
        taskCategory: "Management"
      }
    ]
  },

  {
    id: 2,
    firstName: "Ananya",
    email: "emma.johnson@example.com",
    password: "123",
    taskCounts: { active: 2, newTask: 2, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Dashboard",
        taskDescription: "Create UI design for dashboard.",
        taskDate: "2026-06-18",
        taskCategory: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Header",
        taskDescription: "Resolve responsive navbar issue.",
        taskDate: "2026-06-11",
        taskCategory: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Integrate payment gateway API.",
        taskDate: "2026-06-09",
        taskCategory: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Team Sync",
        taskDescription: "Weekly team synchronization meeting.",
        taskDate: "2026-06-17",
        taskCategory: "Meeting"
      }
    ]
  },

  {
    id: 3,
    firstName: "Vihaan",
    email: "michael.brown@example.com",
    password: "123",
    taskCounts: { active: 1, newTask: 1, completed: 2, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Take backup of production database.",
        taskDate: "2026-06-14",
        taskCategory: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize Queries",
        taskDescription: "Improve slow SQL queries.",
        taskDate: "2026-06-08",
        taskCategory: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Server Monitoring",
        taskDescription: "Check server health metrics.",
        taskDate: "2026-06-15",
        taskCategory: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Migration Task",
        taskDescription: "Migrate legacy records.",
        taskDate: "2026-06-07",
        taskCategory: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Index Creation",
        taskDescription: "Create indexes for faster search.",
        taskDate: "2026-06-05",
        taskCategory: "Database"
      }
    ]
  },

  {
    id: 4,
    firstName: "Diya",
    email: "olivia.davis@example.com",
    password: "123",
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Content Writing",
        taskDescription: "Write blog post for product launch.",
        taskDate: "2026-06-20",
        taskCategory: "Content"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "SEO Audit",
        taskDescription: "Audit website SEO performance.",
        taskDate: "2026-06-18",
        taskCategory: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Keyword Research",
        taskDescription: "Research trending keywords.",
        taskDate: "2026-06-06",
        taskCategory: "Marketing"
      }
    ]
  },

  {
    id: 5,
    firstName: "Arjun",
    email: "william.wilson@example.com",
    password: "123",
    taskCounts: { active: 1, newTask: 2, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review pull requests from team.",
        taskDate: "2026-06-14",
        taskCategory: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Resolve authentication bugs.",
        taskDate: "2026-06-10",
        taskCategory: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Update",
        taskDescription: "Deploy latest build to server.",
        taskDate: "2026-06-09",
        taskCategory: "DevOps"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Sprint Planning",
        taskDescription: "Plan tasks for next sprint.",
        taskDate: "2026-06-16",
        taskCategory: "Management"
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    firstName: "Rajesh",
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  // Check if "emp" already exists in localStorage
  const existingEmp = localStorage.getItem("emp");
  const existingAdmin = localStorage.getItem("admin");

  // Only set the default data if localStorage is empty
  if (!existingEmp || !existingAdmin) {
    localStorage.setItem("emp", JSON.stringify(emp));
    localStorage.setItem("admin", JSON.stringify(admin));
    console.log("Local storage initialized with fresh Indian names data.");
  }
};

export const getLocalStorage = () => {
  const emp = JSON.parse(localStorage.getItem('emp'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { emp, admin };
};