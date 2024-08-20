const initialDashboardData = [
  {
    dashboard: {
      id: "cnapp_dashboard",
      title: "CNAPP Dashboard",
      sections: [
        {
          id: "cspm_section",
          name: "CSPM Executive Dashboard",
          widgets: [
            {
              id: "cloud_accounts_widget",
              name: "Cloud Accounts",
              type: "circular_graph",
              description: "",
              data: {
                connected: 60,
                not_connected: 40
              }
            },
            {
              id: "cloud_account_risk_management",
              name: "Cloud Account Risk Management",
              type: "circular_graph",
              description: "",
              data: {
                failed: 10,
                warning: 20,
                not_available: 30,
                passed: 40
              }
            }
          ]
        },
        {
          id: "cwpp_section",
          name: "CWPP Dashboard",
          widgets: [
            {
              id: "top_5_namespace_alerts",
              name: "Top 5 Namespace Specific Alerts",
              type: "text",
              description: "",
              data: "No graph data available"
            },
            {
              id: "workload_alerts",
              name: "Workload Alerts",
              type: "text",
              description: "",
              data: "No graph data available"
            }
          ]
        },
        {
          id: "registry_scan_section",
          name: "Registry Scan",
          widgets: [
            {
              id: "image_risk_assessment",
              name: "Image Risk Assessment",
              type: "scale_graph",
              description: "",
              data: {
                critical: 25,
                high: 50,
                medium: 15,
                low: 10
              }
            },
            {
              id: "image_security_issues",
              name: "Image Security Issues",
              type: "scale_graph",
              description: "",
              data: {
                critical: 25,
                high: 50,
                medium: 15,
                low: 10
              }
            }
          ]
        },
        {
          id: "ticket_section",
          name: "Ticket Dashboard",
          widgets: [
            {
              id: "ticket_widget_1",
              name: "Ticket Widget 1",
              type: "text",
              description: "",
              data: "No graph data available"
            },
            {
              id: "ticket_widget_2",
              name: "Ticket Widget 2",
              type: "text",
              description: "",
              data: "No graph data available"
            }
          ]
        }
      ]
    }
  }
];

export default initialDashboardData;
