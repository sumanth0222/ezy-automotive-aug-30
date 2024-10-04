export const MENUITEMS = [
  {
    menutitle: "Main",
    Items: [
      {
        path: `${import.meta.env.BASE_URL}dashboard/dashboard2`,
        icon: (
          <i className="fas fa-tachometer-alt side-menu__icon"/>
        ),
        type: "link",
        selected:false,
        active:false,
        title: "Dashboards",
      },
      {
        path: `${import.meta.env.BASE_URL}app/calendar`,
        icon: (
          <svg 
          class="side-menu__icon" 
          xmlns="http://www.w3.org/2000/svg" 
          height="24" 
          viewBox="0 0 24 24" 
          width="24"
          >
          
          <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H4V5h16zM4 21V10h16v11H4z"></path>
          </svg>
        ),
        type: "link",
        selected:false,
        active:false,
        title: "Booking Diary",
      },
      {
        path: `${import.meta.env.BASE_URL}elements/tabs`,
        icon: (
          <i className="fa fa-star side-menu__icon"/>
        ),
        type: "link",
        selected:false,
        active:false,
        title: "Transaction Centre",
      },
      {
        title: "Inspections",
        icon: (
          <i className="fa fa-search side-menu__icon"/>
        ),
        type: "sub",
        selected:false,
        active:false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}advancedui/timeline`,
            type: "link",
            active:false,
            selected:false,
            title: "New Inspections",
          },
          {
            path: `${import.meta.env.BASE_URL}pages/pricing/`,
            type: "link",
            active:false,
            selected:false,
            title: "Groups",
          },
          {
            path: `${import.meta.env.BASE_URL}advancedui/editPost`,
            type: "link",
            active:false,
            selected:false,
            title: "Templates",
          },
          {
            path: `${import.meta.env.BASE_URL}advancedui/ratings`,
            type: "link",
            active:false,
            selected:false,
            title: "Settings",
          },
        ],
      },
      {
        // path: `${import.meta.env.BASE_URL}pages/todotask`,
        path: `${import.meta.env.BASE_URL}pages/todotask/customers`,
        icon: (
          <i className="fa fa-users side-menu__icon"/>
        ),
        type: "link",
        selected:false,
        active:false,
        title: "Customers",
      },
      {
        path: `${import.meta.env.BASE_URL}advancedui/search`,
        icon: (
          <i class="fas fa-taxi side-menu__icon"></i>
        ),
        type: "link",
        selected:false,
        active:false,
        title: "Vehicles",
      },
      {
        path: `${import.meta.env.BASE_URL}elements/buttons`,
        icon: (
          <i className="fa fa-truck side-menu__icon"/>
        ),
        type: "link",
        selected:false,
        active:false,
        title: "Suppliers",
      },
      {
        path: `${import.meta.env.BASE_URL}pages/emptypage/`,
        icon: (
          <i className="fa fa-tags side-menu__icon"/>
        ),
        type: "link",
        selected:false,
        active:false,
        title: "Products",
      },
      {
        title: "Stock Take",
        icon: (
          <i className="fab fa-steam side-menu__icon"/>
        ),
        type: "sub",
        selected:false,
        active:false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}advancedui/counters`,
            type: "link",
            active:false,
            selected:false,
            title: "Stock Take",
          },
          {
            path: `${import.meta.env.BASE_URL}elements/avatar`,
            type: "link",
            active:false,
            selected:false,
            title: "Stock Take Single",
          },
          
        ],
      },
      {
        title: "Reports",
        icon: (
          <i className="fa fa-chart-line side-menu__icon"/>
        ),
        type: "sub",
        selected:false,
        active:false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}elements/alerts/`,
            type: "link",
            active:false,
            selected:false,
            title: "Business Reports",
          },
          {
            path: `${import.meta.env.BASE_URL}tables/datatables/`,
            type: "link",
            active:false,
            selected:false,
            title: "Statements",
          },
          
        ],
      },
      {
        title: "Employees",
        icon: (
          <i className="fa fa-cogs side-menu__icon"/>
        ),
        type: "sub",
        selected:false,
        active:false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}pages/gallery`,
            type: "link",
            active:false,
            selected:false,
            title: "Mechanics",
          },
          {
            path: `${import.meta.env.BASE_URL}pages/ecommerce/cart`,
            type: "link",
            active:false,
            selected:false,
            title: "Service Advisors",
          },
          {
            path: `${import.meta.env.BASE_URL}pages/ecommerce/checkout`,
            type: "link",
            active:false,
            selected:false,
            title: "Mechanic Clock On",
          },
          
        ],
      },
      {
        title: "Loans Cars",
        icon: (
          <i className="fa fa-car side-menu__icon"/>
        ),
        type: "sub",
        selected:false,
        active:false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}app/contacts`,
            type: "link",
            active:false,
            selected:false,
            title: "Loan Cars Diary",
          },
          {
            path: `${import.meta.env.BASE_URL}elements/breadcrumbs`,
            type: "link",
            active:false,
            selected:false,
            title: "Loan Vehicle",
          },
          
        ],
      },
      {
        title: "Integrations",
        icon: (
          <i className="fa fa-plug side-menu__icon"/>
        ),
        type: "sub",
        selected:false,
        active:false,
        children: [
          
          {
            title: "Automotive Integrations",
            icon: (
              <i className="fa fa-plug"/>
            ),
            type: "sub",
            selected:false,
            active:false,
            children: [
              {
                path: `${import.meta.env.BASE_URL}widgets/automotive`,
                title: "Vehicle Visuals",
                type: "link",
                active:false,
                selected:false,
              },
              {
                path: `${import.meta.env.BASE_URL}widgets/vvgarage`,
                title: "vvGarage",
                type: "link",
                active:false,
                selected:false,
              },
              
            ],
          },
          {
            title: "Accounting Integrations",
            type: "sub",
            selected:false,
            active:false,
            children: [
              {
                path: `${import.meta.env.BASE_URL}widgets/accounting`,
                title: "Quickbooks",
                type: "link",
                active:false,
                selected:false,
              },
              {
                path: `${import.meta.env.BASE_URL}widgets/xero`,
                title: "Xero",
                type: "link",
                active:false,
                selected:false,
              },
              
            ],
          },
          {
            title: "Marketing Integrations",
            type: "sub",
            selected:false,
            active:false,
            children: [
              {
                path: `${import.meta.env.BASE_URL}widgets/marketing`,
                title: "Mailchimp",
                type: "link",
                active:false,
                selected:false,
              },
              
            ],
          },
          {
            title: "POS Integrations",
            type: "sub",
            selected:false,
            active:false,
            children: [
              {
                path: `${import.meta.env.BASE_URL}widgets/pos`,
                title: "Stripe",
                type: "link",
                active:false,
                selected:false,
              },
              
            ],
          },
          
        ],
      },
      
      {
        title: "Settings",
        icon: (
          <i className="fa fa-wrench side-menu__icon"/>
        ),
        type: "sub",
        selected:false,
        active:false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}widgets/companysettings`,
            type: "link",
            active:false,
            selected:false,
            title: "Company Settings",
          },
          {
            path: `${import.meta.env.BASE_URL}widgets/publicbookings`,
            type: "link",
            active:false,
            selected:false,
            title: "Public Bookings",
          },
          {
            path: `${import.meta.env.BASE_URL}widgets/companylist`,
            type: "link",
            active:false,
            selected:false,
            title: "Company Lists",
          },
          {
            path: `${import.meta.env.BASE_URL}widgets/pricematrix`,
            type: "link",
            active:false,
            selected:false,
            title: "Price Matrix",
          },
          {
            path: `${import.meta.env.BASE_URL}widgets/remainder`,
            type: "link",
            active:false,
            selected:false,
            title: "Reminders",
          },
          {
            path: `${import.meta.env.BASE_URL}widgets/messages`,
            type: "link",
            active:false,
            selected:false,
            title: "Messages",
          },
          {
            path: `${import.meta.env.BASE_URL}widgets/schudules`,
            type: "link",
            active:false,
            selected:false,
            title: "Schedules",
          },
          {
            path: `${import.meta.env.BASE_URL}widgets/usersettings`,
            type: "link",
            active:false,
            selected:false,
            title: "User Settings",
          },
          {
            path: `${import.meta.env.BASE_URL}widgets/usersetup`,
            type: "link",
            active:false,
            selected:false,
            title: "User Setup",
          },
          {
            path: `${import.meta.env.BASE_URL}widgets/videosettings`,
            type: "link",
            active:false,
            selected:false,
            title: "Video Settings",
          },
          {
            path: `${import.meta.env.BASE_URL}widgets/customerportal`,
            type: "link",
            active:false,
            selected:false,
            title: "Customer Portal",
          },
        ],
      },

      {
        title: "Actions",
        icon: (
          <i className="fa fa-address-book side-menu__icon"/>
        ),
        type: "sub",
        selected:false,
        active:false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}widgets/sendremainder`,
            type: "link",
            active:false,
            selected:false,
            title: "Send Reminders",
          },
          {
            path: `${import.meta.env.BASE_URL}widgets/communicationcenter`,
            type: "link",
            active:false,
            selected:false,
            title: "Communication Center",
          },
          {
            path: `${import.meta.env.BASE_URL}widgets/quickbookexport`,
            type: "link",
            active:false,
            selected:false,
            title: "QuickBooks Export",
          },
          {
            path: `${import.meta.env.BASE_URL}widgets/import1`,
            type: "link",
            active:false,
            selected:false,
            title: "Import",
          },
          {
            path: `${import.meta.env.BASE_URL}widgets/export1`,
            type: "link",
            active:false,
            selected:false,
            title: "Export",
          },

        ],
      },
      
    ],
  },

  // {
  //   menutitle: "WEB APPS",
  //   Items: [
  //     {
  //       title: "Apps",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected:false,
  //       active:false,
  //       children: [
  //         {
  //           path: ${import.meta.env.BASE_URL}app/cards,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "Cards",
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}app/rangeslider,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "Range-slider",
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}app/calendar,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "Calendar",
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}app/contacts,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "Contacts",
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}app/imagecompare,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "Image-compare",
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}app/notification,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "Notification",
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}app/widgetnotification,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "Widget-notification",
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}app/treeview,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "Treeview",
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}app/filemanager,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "File-manager",
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}app/filemanager1,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "File-manager1",
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}app/filedetails,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "File-details",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Elements",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M20 17V7c0-2.168-3.663-4-8-4S4 4.832 4 7v10c0 2.168 3.663 4 8 4s8-1.832 8-4zM12 5c3.691 0 5.931 1.507 6 1.994C17.931 7.493 15.691 9 12 9S6.069 7.493 6 7.006C6.069 6.507 8.309 5 12 5zM6 9.607C7.479 10.454 9.637 11 12 11s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2V9.607zM6 17v-2.393C7.479 15.454 9.637 16 12 16s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected:false,
  //       active:false,
  //       children: [
  //         {
  //           path: ${import.meta.env.BASE_URL}elements/alerts,
  //           title: "Alerts",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}elements/avatar,
  //           title: "Avatar",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}elements/breadcrumbs,
  //           title: "Breadcrumbs",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}elements/buttons,
  //           title: "Buttons",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}elements/badge,
  //           title: "Badges",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}elements/dropdown,
  //           title: "Dropdown",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}elements/thumbnails,
  //           title: "Thumbnails",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}elements/listgroup,
  //           title: "List Group",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}elements/navigation,
  //           title: "Navigation",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}elements/images,
  //           title: "Images",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}elements/pagination,
  //           title: "Pagination",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}elements/popover,
  //           title: "Popover",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}elements/progress,
  //           title: "Progress",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}elements/spinners,
  //           title: "Spinners",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}elements/mediaobject,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "Media Object",
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}elements/typography,
  //           title: "Typography",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}elements/tooltip,
  //           title: "Tooltip",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}elements/toast,
  //           title: "Toast",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}elements/tags,
  //           title: "Tags",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },

  //         {
  //           path: ${import.meta.env.BASE_URL}elements/tabs,
  //           title: "Tabs",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Advanced UI",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897C5.231 16.625 4.911 9.642 4.966 7.635L12 4.118l7.029 3.515c.037 1.989-.328 9.018-7.029 12.264z" />
  //           <path d="m11 12.586-2.293-2.293-1.414 1.414L11 15.414l5.707-5.707-1.414-1.414z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected:false,
  //       bookmark: true,
  //       active:false,
  //       children: [
  //         {
  //           path: ${import.meta.env.BASE_URL}advancedui/accordion,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "Accordions",
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}advancedui/carousel,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "Carousel",
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}advancedui/collapse,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "Collapse",
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}advancedui/modals,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "Modals",
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}advancedui/timeline,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "Timeline",
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}advancedui/sweetalert,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "Sweet Alert",
  //         },

  //         {
  //           path: ${import.meta.env.BASE_URL}advancedui/ratings,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "Ratings",
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}advancedui/counters,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "Counters",
  //         },

  //         {
  //           path: ${import.meta.env.BASE_URL}advancedui/search,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "Search",
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}advancedui/userlist,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "Userlist",
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}advancedui/blog,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "Blog",
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}advancedui/blogdetails,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "Blog-details",
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}advancedui/editPost,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "Edit-post",
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}advancedui/fileattachments,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "File Attachments",
  //         },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   menutitle: "PAGES",
  //   Items: [
  //     {
  //       title: "Pages",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M22 7.999a1 1 0 0 0-.516-.874l-9.022-5a1.003 1.003 0 0 0-.968 0l-8.978 4.96a1 1 0 0 0-.003 1.748l9.022 5.04a.995.995 0 0 0 .973.001l8.978-5A1 1 0 0 0 22 7.999zm-9.977 3.855L5.06 7.965l6.917-3.822 6.964 3.859-6.918 3.852z" />
  //           <path d="M20.515 11.126 12 15.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z" />
  //           <path d="M20.515 15.126 12 19.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected:false,
  //       active:false,
  //       children: [
  //         {
  //           title: "Authentication",
  //           type: "sub",
  //           selected:false,
  //           active:false,
  //           children: [
  //             {
  //               path: ${import.meta.env.BASE_URL}pages/authentication/sigin,
  //               title: "Sign In",
  //               type: "link",
  //               active:false,
  //               selected:false,
  //             },
  //             {
  //               path: ${import.meta.env.BASE_URL}pages/authentication/sigup,
  //               title: "Sign Up",
  //               type: "link",
  //               active:false,
  //               selected:false,
  //             },
  //             {
  //               path: ${import.meta.env.BASE_URL}pages/authentication/forgotpassword,
  //               title: "Forgot Password",
  //               type: "link",
  //               active:false,
  //               selected:false,
  //             },
  //             {
  //               path: ${import.meta.env.BASE_URL}pages/authentication/resetpassword,
  //               title: "Reset Password",
  //               type: "link",
  //               active:false,
  //               selected:false,
  //             },
  //             {
  //               path: ${import.meta.env.BASE_URL}pages/authentication/lockscreen,
  //               title: "Lockscreen",
  //               type: "link",
  //               active:false,
  //               selected:false,
  //             },
  //             {
  //               path: ${import.meta.env.BASE_URL}pages/authentication/underconstruction,
  //               title: "UnderConstruction",
  //               type: "link",
  //               active:false,
  //               selected:false,
  //             },
  //             {
  //               path: ${import.meta.env.BASE_URL}pages/authentication/404error,
  //               title: "404 Error",
  //               type: "link",
  //               active:false,
  //               selected:false,
  //             },
  //             {
  //               path: ${import.meta.env.BASE_URL}pages/authentication/500error,
  //               title: "500 Error",
  //               type: "link",
  //               active:false,
  //               selected:false,
  //             },
  //             {
  //               path: ${import.meta.env.BASE_URL}pages/authentication/501error,
  //               title: "501 Error",
  //               type: "link",
  //               active:false,
  //               selected:false,
  //             },
  //           ],
  //         },
  //         {
  //           title: "Switcher",
  //           type: "sub",
  //           selected:false,
  //           active:false,
  //           children: [
  //             {
  //               path: ${import.meta.env.BASE_URL}pages/switcher/switcher1,
  //               title: "Switcher-1",
  //               type: "link",
  //               active:false,
  //               selected:false,
  //             },
  //           ],
  //         },
  //         {
  //           title: "E-Commerce",
  //           type: "sub",
  //           selected:false,
  //           active:false,
  //           children: [
  //             {
  //               path: ${import.meta.env.BASE_URL}pages/ecommerce/shop,
  //               title: "Shop",
  //               type: "link",
  //               active:false,
  //               selected:false,
  //             },
  //             {
  //               path: ${import.meta.env.BASE_URL}pages/ecommerce/productdetails,
  //               title: "Product Details",
  //               type: "link",
  //               active:false,
  //               selected:false,
  //             },
  //             {
  //               path: ${import.meta.env.BASE_URL}pages/ecommerce/cart,
  //               title: "Cart",
  //               type: "link",
  //               active:false,
  //               selected:false,
  //             },
  //             {
  //               path: ${import.meta.env.BASE_URL}pages/ecommerce/checkout,
  //               title: "Checkout",
  //               type: "link",
  //               active:false,
  //               selected:false,
  //             },
  //             {
  //               path: ${import.meta.env.BASE_URL}pages/ecommerce/wishlist,
  //               title: "Wish-list",
  //               type: "link",
  //               active:false,
  //               selected:false,
  //             },
  //           ],
  //         },

  //         {
  //           path: ${import.meta.env.BASE_URL}pages/profile,
  //           title: "Profile",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}pages/notificationslist,
  //           title: "Notification-list",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}pages/aboutus,
  //           title: "About Us",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}pages/settings,
  //           title: "Settings",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           title: "Mail",
  //           type: "sub",
  //           selected:false,
  //           active:false,
  //           children: [
  //             {
  //               path: ${import.meta.env.BASE_URL}pages/mail/mail,
  //               title: "Mail",
  //               type: "link",
  //               active:false,
  //               selected:false,
  //             },
  //             {
  //               path: ${import.meta.env.BASE_URL}pages/mail/mailcompose,
  //               title: "Mail Compose",
  //               type: "link",
  //               active:false,
  //               selected:false,
  //             },
  //             {
  //               path: ${import.meta.env.BASE_URL}pages/mail/readmail,
  //               title: "Read-Mail",
  //               type: "link",
  //               active:false,
  //               selected:false,
  //             },
  //             {
  //               path: ${import.meta.env.BASE_URL}pages/mail/mailsettings,
  //               title: "Mail-Settings",
  //               type: "link",
  //               active:false,
  //               selected:false,
  //             },
  //             {
  //               path: ${import.meta.env.BASE_URL}pages/mail/chat,
  //               title: "Chat",
  //               type: "link",
  //               active:false,
  //               selected:false,
  //             },
  //           ],
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}pages/invoice,
  //           title: "Invoice",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}pages/pricing,
  //           title: "Pricing",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}pages/gallery,
  //           title: "Gallery",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}pages/todotask,
  //           title: "Todotask",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}pages/faqs,
  //           title: "FAQS",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}pages/emptypage,
  //           title: "Empty Page",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Utilities",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M12 22c4.879 0 9-4.121 9-9s-4.121-9-9-9-9 4.121-9 9 4.121 9 9 9zm0-16c3.794 0 7 3.206 7 7s-3.206 7-7 7-7-3.206-7-7 3.206-7 7-7zm5.284-2.293 1.412-1.416 3.01 3-1.413 1.417zM5.282 2.294 6.7 3.706l-2.99 3-1.417-1.413z" />
  //           <path d="M11 9h2v5h-2zm0 6h2v2h-2z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected:false,
  //       active:false,
  //       children: [
  //         {
  //           path: ${import.meta.env.BASE_URL}utilities/background,
  //           title: "Background",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}utilities/border,
  //           title: "Border",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}utilities/display,
  //           title: "Display",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}utilities/flex,
  //           title: "Flex",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}utilities/height,
  //           title: "Height",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}utilities/margin,
  //           title: "Margin",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}utilities/padding,
  //           title: "Padding",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}utilities/position,
  //           title: "Position",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}utilities/width,
  //           title: "Width",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}utilities/extras,
  //           title: "Extras",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   menutitle: "GENERAL",
  //   Items: [
  //     {
  //       title: "Icons",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M20 7h-1.209A4.92 4.92 0 0 0 19 5.5C19 3.57 17.43 2 15.5 2c-1.622 0-2.705 1.482-3.404 3.085C11.407 3.57 10.269 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .596.079 1.089.209 1.5H4c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm-4.5-3c.827 0 1.5.673 1.5 1.5C17 7 16.374 7 16 7h-2.478c.511-1.576 1.253-3 1.978-3zM7 5.5C7 4.673 7.673 4 8.5 4c.888 0 1.714 1.525 2.198 3H8c-.374 0-1 0-1-1.5zM4 9h7v2H4V9zm2 11v-7h5v7H6zm12 0h-5v-7h5v7zm-5-9V9.085L13.017 9H20l.001 2H13z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected:false,
  //       children: [
  //         {
  //           path: ${import.meta.env.BASE_URL}icons/fontawesome,
  //           title: "Font Awesome",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}icons/materialdesignicons,
  //           title: "Material Design Icons",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}icons/simplelineicons,
  //           title: "Simple Line Icons",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}icons/feathericons,
  //           title: "Feather Icons",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}icons/ionicicons,
  //           title: "Ionic Icons",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}icons/flagicons,
  //           title: "Flag Icons",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}icons/pe7icons,
  //           title: "Pe7 Icons",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}icons/themifyicons,
  //           title: "Themify Icons",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}icons/typiconsicons,
  //           title: "Typicons Icons",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}icons/weathericons,
  //           title: "Weather Icons",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}icons/materialicons,
  //           title: "Material Icons",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}icons/bootstrapicons,
  //           title: "Bootstrap Icons",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Charts",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M20 7h-4V4c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H4c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9c0-1.103-.897-2-2-2zM4 11h4v8H4v-8zm6-1V4h4v15h-4v-9zm10 9h-4V9h4v10z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected:false,
  //       children: [
  //         {
  //           path: ${import.meta.env.BASE_URL}charts/chartJs,
  //           title: " ChartJs",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}charts/echart,
  //           title: "Echart",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
      
  //         {
  //           path: ${import.meta.env.BASE_URL}charts/apexcharts,
  //           title: "ApexCharts",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   menutitle: "MULTI LEVEL",
  //   Items: [
  //     {
  //       title: "Menu-levels",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected:false,
  //       active:false,
  //       children: [
  //         {
  //           path: "#",
  //           title: "Level-1",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },

  //         {
  //           title: "Level-2",
  //           type: "sub",
  //           selected:false,
  //           active:false,
  //           children: [
  //             {
  //               path: "#",
  //               title: "Level-2.1",
  //               type: "link",
  //               active:false,
  //               selected:false,
  //             },
  //             {
  //               path: "#",
  //               title: "Level-2.2",
  //               type: "link",
  //               active:false,
  //               selected:false,
  //             },
              
  //             {
  //               title: "Level-2.3",
  //               type: "sub",
  //               selected:false,
  //               active:false,
  //               children: [
  //                 {
  //                   path: "#",
  //                   title: "Level-2.3.1",
  //                   type: "link",
  //                   active:false,
  //                   selected:false,
  //                 },
  //                 {
  //                   path: "#",
  //                   title: "Level-2.3.2",
  //                   type: "link",
  //                   active:false,
  //                   selected:false,
  //                 },
  //                 {
  //                   path: "#",
  //                   title: "Level-2.3.3",
  //                   type: "link",
  //                   active:false,
  //                   selected:false,
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   menutitle: "COMPONENTS",
  //   Items: [
  //     {
  //       title: "Forms",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M19.937 8.68c-.011-.032-.02-.063-.033-.094a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.99.99 0 0 0-.05-.258zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected:false,
  //       active:false,
  //       children: [
  //         {
  //           path: ${import.meta.env.BASE_URL}forms/formelements,
  //           title: "Form Elements",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}forms/advancedforms,
  //           title: "Advanced Forms",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}forms/formlayouts,
  //           title: "Form Layouts",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}forms/formvalidation,
  //           title: "Form Validation",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}forms/formwizard,
  //           title: "Form Wizard",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}forms/formeditor,
  //           title: "Form Editor",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}forms/formelementsizes,
  //           title: "Form-element-sizes",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}forms/forminputspinners,
  //           title: "Form Input Spinners",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Tables",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 2 .001 4H5V5h14zM5 11h8v8H5v-8zm10 8v-8h4.001l.001 8H15z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected:false,
  //       active:false,
  //       children: [
  //         {
  //           path: ${import.meta.env.BASE_URL}tables/defaulttables,
  //           title: " Default Tables",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}tables/datatables,
  //           title: "Data Tables ",
  //           type: "link",
  //           active:false,
  //           selected:false,
  //         },
  //       ],
  //     },
  //     {
  //       path: ${import.meta.env.BASE_URL}widgets,
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11 4h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6h-4v-4h4v4zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
  //         </svg>
  //       ),
  //       type: "link",
  //       selected:false,
  //       active:false,
  //       title: "Widgets",
  //     },
  //     {
  //       title: "Maps",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M2.002 9.63c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.736a1 1 0 0 0-.686.894zm16.464-3.971-4.182 12.73-2.534-5.522a.998.998 0 0 0-.492-.492L5.734 9.841l12.732-4.182z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected:false,
  //       active:false,
  //       children: [
  //         {
  //           path: ${import.meta.env.BASE_URL}maps/leafletmaps,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "Leaflet Maps ",
  //         },
  //         {
  //           path: ${import.meta.env.BASE_URL}maps/simplemaps,
  //           type: "link",
  //           active:false,
  //           selected:false,
  //           title: "Simple Maps ",
  //         },
  //       ],
  //     },
  //   ],
  // },
];