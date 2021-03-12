import pages from './pages';
import { IS_SAAS_SERVICE } from './config';
import ErrorTracking from './pages/ErrorTracking';
import ErrorTrackingView from './pages/ErrorTrackingView';
import ErrorEventView from './pages/ErrorEventView';
import WebhookSettings from './pages/WebhookSettings';

const {
    Home,
    Settings,
    TeamMembers,
    TeamMemberProfile,
    StatusPage,
    StatusPages,
    Profile,
    OnCall,
    Monitor,
    Component,
    AlertLog,
    IncidentLog,
    Incident,
    IncidentSettings,
    Billing,
    Resources,
    Schedule,
    Integrations,
    EmailTemplates,
    SmsTemplates,
    Reports,
    MonitorView,
    WebsiteMonitorIssues,
    Probe,
    ProfileBilling,
    ApplicationLog,
    ApplicationLogView,
    Container,
    Application,
    ApplicationDetail,
    ContainerDetail,
    GitCredential,
    DockerCredential,
    FyipeApi,
    ChangePasswordSetting,
    DeleteAccountPage,
    ScheduledEvent,
    ScheduledEventDetail,
    Consulting,
    Advanced,
    ComponentSettings,
    ComponentSettingsAdvanced,
    MonitorSettings,
    CallRouting,
    Groups,
} = pages;

export const groups = [
    {
        group: 'VisibleOnComponentDetail',
        visible: true,
        visibleOnComponentDetail: true,
        routes: [
            {
                title: 'Back to Dashboard',
                path: '/dashboard/project/:slug/components',
                icon: 'back',
                component: Component,
                visible: true,
                subRoutes: [],
                index: 2,
                shortcut: 'f+d',
            },
            {
                title: 'Monitors',
                path: '/dashboard/project/:slug/:componentId/monitoring',
                icon: 'monitor',
                component: Monitor,
                exact: true,
                visible: true,
                shortcut: 'f+m',
                subRoutes: [
                    {
                        title: 'Monitor View',
                        path:
                            '/dashboard/project/:slug/:componentId/monitoring/:monitorSlug',
                        icon: 'monitor',
                        visible: true,
                        subRoutes: [],
                        component: MonitorView,
                        exact: true,
                        index: 1,
                        shortcut: 'm+v',
                    },
                    {
                        title: 'Website Issues',
                        path:
                            '/dashboard/project/:slug/:componentId/monitoring/:monitorSlug/issues/:issueId',
                        icon: 'info',
                        visible: true,
                        subRoutes: [],
                        component: WebsiteMonitorIssues,
                        index: 2,
                        shortcut: 'm+w',
                    },
                ],
                index: 3,
            },
            {
                title: 'Incident Log',
                path: '/dashboard/project/:slug/:componentId/incident-log',
                icon: 'info',
                visible: true,
                component: IncidentLog,
                shortcut: 'f+l',
                subRoutes: [
                    {
                        title: 'Incident',
                        path:
                            '/dashboard/project/:slug/:componentId/incidents/:incidentId',
                        icon: 'info',
                        visible: true,
                        subRoutes: [],
                        component: Incident,
                        index: 1,
                        shortcut: 'i+c',
                    },
                ],
                index: 5,
            },
            {
                title: 'Logs',
                path: '/dashboard/project/:slug/:componentId/application-log',
                icon: 'appLog',
                visible: true,
                exact: true,
                component: ApplicationLog,
                index: 6,
                shortcut: 'f+g',
                subRoutes: [
                    {
                        title: 'Log Container View',
                        path:
                            '/dashboard/project/:slug/:componentId/application-logs/:applicationLogSlug',
                        icon: 'radar',
                        visible: true,
                        subRoutes: [],
                        component: ApplicationLogView,
                        index: 1,
                        shortcut: 'l+c',
                    },
                ],
            },
            {
                title: 'Error Tracking',
                path: '/dashboard/project/:slug/:componentId/error-tracker',
                icon: 'errorTracking',
                visible: true,
                exact: true,
                component: ErrorTracking,
                index: 7,
                shortcut: 'f+t',
                subRoutes: [
                    {
                        title: 'Error Tracking View',
                        path:
                            '/dashboard/project/:slug/:componentId/error-trackers/:errorTrackerSlug',
                        icon: 'radar',
                        visible: true,
                        exact: true,
                        subRoutes: [],
                        component: ErrorTrackingView,
                        index: 1,
                        shortcut: 'e+v',
                    },
                    {
                        title: 'Error Tracking Detail View',
                        path:
                            '/dashboard/project/:slug/:componentId/error-trackers/:errorTrackerSlug/events/:errorEventId',
                        icon: 'radar',
                        visible: true,
                        exact: true,
                        subRoutes: [],
                        component: ErrorEventView,
                        index: 2,
                        shortcut: 'e+d',
                    },
                ],
            },
            {
                title: 'Security',
                path:
                    '/dashboard/project/:slug/:componentId/security/container',
                icon: 'security',
                visible: true,
                component: Container,
                exact: true,
                shortcut: 'f+r',
                subRoutes: [
                    {
                        title: 'Container',
                        path:
                            '/dashboard/project/:slug/:componentId/security/container',
                        icon: 'security',
                        visible: true,
                        subRoute: [],
                        component: Container,
                        index: 1,
                        exact: true,
                        shortcut: 'r+c',
                    },
                    {
                        title: 'Container Detail',
                        path:
                            '/dashboard/project/:slug/:componentId/security/container/:containerSecuritySlug',
                        icon: 'docker',
                        visible: true,
                        subRoute: [],
                        index: 2,
                        component: ContainerDetail,
                        exact: true,
                        shortcut: 'r+d',
                    },
                    {
                        title: 'Application',
                        path:
                            '/dashboard/project/:slug/:componentId/security/application',
                        icon: 'security',
                        visible: true,
                        component: Application,
                        index: 3,
                        subRoute: [],
                        exact: true,
                        shortcut: 'r+a',
                    },
                    {
                        title: 'Application Detail',
                        path:
                            '/dashboard/project/:slug/:componentId/security/application/:applicationSecuritySlug',
                        icon: 'info',
                        visible: true,
                        component: ApplicationDetail,
                        index: 4,
                        subRoute: [],
                        exact: true,
                        shortcut: 'r+n',
                    },
                ],
                index: 7,
            },
            {
                title: 'Component Settings',
                path: '/dashboard/project/:slug/:componentId/settings/basic',
                icon: 'businessSettings',
                visible: true,
                exact: true,
                component: ComponentSettings,
                shortcut: 'f+s',
                index: 8,
                subRoutes: [
                    {
                        title: 'Basic',
                        path:
                            '/dashboard/project/:slug/:componentId/settings/basic',
                        icon: 'businessSettings',
                        visible: true,
                        subRoutes: [],
                        component: ComponentSettings,
                        index: 1,
                        shortcut: 'c+b',
                        exact: true,
                    },
                    {
                        title: 'Advanced',
                        path:
                            '/dashboard/project/:slug/:componentId/settings/advanced',
                        icon: 'businessSettings',
                        visible: true,
                        subRoutes: [],
                        component: ComponentSettingsAdvanced,
                        index: 2,
                        shortcut: 'c+a',
                        exact: true,
                    },
                ],
            },
        ],
    },
    {
        group: 'visibleForProjectViewer',
        visible: true,
        visibleForProjectViewer: true,
        routes: [
            {
                title: 'Status Pages',
                path: '/dashboard/project/:slug/status-pages',
                icon: 'radar',
                visible: true,
                shortcut: 'f+p',
                subRoutes: [],
                component: StatusPages,
                index: 1,
            },
        ],
    },
    {
        group: 'Products',
        visible: true,
        routes: [
            {
                title: 'Home',
                path: '/dashboard/project/:slug',
                icon: 'home',
                exact: true,
                visible: true,
                component: Home,
                subRoutes: [],
                index: 1,
                shortcut: 'f+h',
            },
            {
                title: 'Components',
                path: '/dashboard/project/:slug/components',
                icon: 'square',
                component: Component,
                visible: true,
                exact: true,
                subRoutes: [],
                index: 2,
                shortcut: 'f+c',
            },
            {
                title: 'Incidents',
                path: '/dashboard/project/:slug/incidents',
                icon: 'info',
                visible: true,
                subRoutes: [],
                component: IncidentLog,
                index: 6,
                shortcut: 'f+i',
            },
            {
                title: 'Status Pages',
                path: '/dashboard/project/:slug/status-pages',
                icon: 'radar',
                visible: true,
                shortcut: 'f+p',
                subRoutes: [
                    {
                        title: 'Status Page',
                        path:
                            '/dashboard/project/:slug/sub-project/:subProjectId/status-page/:scheduleId',
                        icon: 'radar',
                        visible: true,
                        subRoutes: [],
                        component: StatusPage,
                        index: 1,
                        shortcut: 'g+s',
                    },
                ],
                component: StatusPages,
                index: 3,
            },
            {
                title: 'On-Call Duty',
                path: '/dashboard/project/:slug/on-call',
                icon: 'call',
                visible: true,
                shortcut: 'f+o',
                subRoutes: [
                    {
                        title: 'Alert Log',
                        path: '/dashboard/project/:slug/alert-log',
                        icon: 'info',
                        visible: true,
                        subRoutes: [],
                        component: AlertLog,
                        index: 1,
                        shortcut: 'o+a',
                    },
                    {
                        title: 'Schedule',
                        path:
                            '/dashboard/project/:slug/sub-project/:subProjectId/schedule/:scheduleId',
                        icon: 'call',
                        visible: true,
                        subRoutes: [],
                        component: Schedule,
                        index: 1,
                        shortcut: 'o+s',
                    },
                ],
                component: OnCall,
                index: 4,
            },
            {
                title: 'Scheduled Maintenance',
                path: '/dashboard/project/:slug/scheduledEvents',
                icon: 'connect',
                visible: true,
                component: ScheduledEvent,
                exact: true,
                subRoutes: [
                    {
                        title: 'Scheduled Event Detail',
                        path:
                            '/dashboard/project/:slug/scheduledEvents/:scheduledEventId',
                        icon: 'connect',
                        visible: true,
                        component: ScheduledEventDetail,
                        subRoutes: [],
                        index: 1,
                        shortcut: 'e+s',
                    },
                ],
                index: 5,
                shortcut: 'f+e',
            },
            {
                title: 'Reports',
                path: '/dashboard/project/:slug/reports',
                icon: 'report',
                visible: true,
                subRoutes: [],
                component: Reports,
                index: 5,
                shortcut: 'f+v',
            },
        ],
    },
    {
        group: 'Settings',
        visible: true,
        routes: [
            {
                title: 'Team Members',
                path: '/dashboard/project/:slug/team',
                icon: 'customers',
                visible: true,
                component: TeamMembers,
                subRoutes: [],
                index: 1,
                shortcut: 'f+u',
            },
            {
                title: 'Project Settings',
                path: '/dashboard/project/:slug/settings',
                icon: 'businessSettings',
                exact: true,
                visible: true,
                shortcut: 'f+s',
                subRoutes: [
                    {
                        title: 'Billing',
                        path: '/dashboard/project/:slug/settings/billing',
                        icon: 'radar',
                        visible: IS_SAAS_SERVICE,
                        subRoutes: [],
                        component: Billing,
                        index: 1,
                        shortcut: 's+b',
                    },
                    {
                        title: 'Integrations',
                        path: '/dashboard/project/:slug/settings/integrations',
                        icon: 'integration',
                        visible: true,
                        subRoutes: [],
                        component: Integrations,
                        index: 5,
                        shortcut: 's+i',
                    },
                    {
                        title: 'API',
                        path: '/dashboard/project/:slug/settings/api',
                        icon: 'apis',
                        visible: true,
                        subRoutes: [],
                        component: FyipeApi,
                        index: 13,
                        shortcut: 's+a',
                    },
                    {
                        title: 'Advanced',
                        path: '/dashboard/project/:slug/settings/advanced',
                        icon: 'businessSettings',
                        visible: true,
                        subRoutes: [],
                        component: Advanced,
                        index: 14,
                        shortcut: 's+v',
                    },
                    {
                        title: 'More',
                        path: '/dashboard/project/:slug/setting',
                        icon: 'radar',
                        visible: true,
                        subRoutes: [],
                        index: 1,
                        shortcut: '',
                    },
                    {
                        title: 'Resources',
                        path: '/dashboard/project/:slug/settings/resources',
                        icon: 'monitor',
                        visible: true,
                        subRoutes: [],
                        component: Resources,
                        index: 2,
                        shortcut: 's+r',
                    },
                    {
                        title: 'Monitor',
                        path: '/dashboard/project/:slug/settings/monitor',
                        icon: 'incidentSettings',
                        visible: true,
                        subRoutes: [],
                        component: MonitorSettings,
                        index: 3,
                        shortcut: 's+m',
                    },
                    {
                        title: 'Incident Settings',
                        path: '/dashboard/project/:slug/settings/incidents',
                        icon: 'incidentSettings',
                        visible: true,
                        subRoutes: [],
                        component: IncidentSettings,
                        index: 4,
                        shortcut: 's+t',
                    },
                    {
                        title: 'Email',
                        path: '/dashboard/project/:slug/settings/emails',
                        icon: 'email',
                        visible: true,
                        subRoutes: [],
                        component: EmailTemplates,
                        index: 6,
                        shortcut: 's+e',
                    },
                    {
                        title: 'SMS & Calls',
                        path: '/dashboard/project/:slug/settings/sms',
                        icon: 'sms',
                        visible: true,
                        subRoutes: [],
                        component: SmsTemplates,
                        index: 7,
                        shortcut: 's+c',
                    },
                    {
                        title: 'Call Routing',
                        path: '/dashboard/project/:slug/settings/callRouting',
                        icon: 'callrouting',
                        visible: true,
                        subRoutes: [],
                        component: CallRouting,
                        index: 8,
                        shortcut: 's+q',
                    },
                    {
                        title: 'Webhooks',
                        path: '/dashboard/project/:slug/settings/webhooks',
                        icon: 'integration',
                        visible: true,
                        subRoutes: [],
                        component: WebhookSettings,
                        index: 9,
                        shortcut: 's+w',
                    },
                    {
                        title: 'Probe',
                        path: '/dashboard/project/:slug/settings/probe',
                        icon: 'probes',
                        visible: true,
                        subRoutes: [],
                        component: Probe,
                        index: 10,
                        shortcut: 's+p',
                    },
                    {
                        title: 'Git Credentials',
                        path: '/dashboard/project/:slug/settings/gitCredential',
                        icon: 'git',
                        visible: true,
                        subRoutes: [],
                        component: GitCredential,
                        index: 11,
                        shortcut: 's+g',
                    },
                    {
                        title: 'Docker Credentials',
                        path:
                            '/dashboard/project/:slug/settings/dockerCredential',
                        icon: 'docker',
                        visible: true,
                        subRoutes: [],
                        component: DockerCredential,
                        index: 12,
                        shortcut: 's+d',
                    },
                    {
                        title: 'Groups',
                        path: '/dashboard/project/:slug/settings/groups',
                        icon: 'docker',
                        visible: true,
                        subRoutes: [],
                        component: Groups,
                        index: 13,
                        shortcut: 's+d',
                    },
                ],
                component: Settings,
                index: 2,
            },
        ],
    },
    {
        group: 'VisibleOnProfile',
        visible: true,
        visibleOnProfile: true,
        routes: [
            {
                title: 'Profile Settings',
                path: '/dashboard/profile/settings',
                icon: 'user',
                visible: true,
                component: Profile,
                subRoutes: [],
                index: 1,
                shortcut: 'f+n',
            },
            {
                title: 'Change Password',
                path: '/dashboard/profile/changePassword',
                icon: 'password',
                visible: true,
                component: ChangePasswordSetting,
                subRoutes: [],
                index: 2,
                shortcut: 'f+w',
            },
            {
                title: 'Billing',
                path: '/dashboard/profile/billing',
                icon: 'receipt',
                visible: IS_SAAS_SERVICE,
                component: ProfileBilling,
                subRoutes: [],
                index: 3,
                shortcut: 'f+b',
            },
            {
                title: 'Advanced',
                path: '/dashboard/profile/advanced',
                icon: 'businessSettings',
                visible: true,
                component: DeleteAccountPage,
                subRoutes: [],
                index: 4,
                shortcut: 'f+a',
            },
            {
                title: 'Team Member Profile',
                path: '/dashboard/profile/:memberId',
                icon: 'user',
                visible: true,
                component: TeamMemberProfile,
                subRoutes: [],
                index: 5,
                shortcut: 'f+x',
            },
            {
                title: 'Back to Dashboard',
                path: '/dashboard/project/:slug/components',
                icon: 'back',
                component: Component,
                visible: true,
                subRoutes: [],
                index: 6,
                shortcut: 'f+k',
            },
        ],
    },
    {
        group: 'services',
        visible: true,
        routes: [
            {
                title: 'Consulting & Services',
                path: '/dashboard/project/:slug/consulting',
                icon: 'consulting',
                visible: true,
                component: Consulting,
                subRoutes: [],
                index: 1,
                shortcut: 'f+q',
            },
        ],
    },
];

const joinFn = (acc = [], curr) => {
    return acc.concat(curr);
};

export const allRoutes = groups
    .map(function merge(group) {
        const { routes } = group;
        const newRoutes = [];
        for (const route of routes) {
            newRoutes.push(route);
        }
        const subRoutes = newRoutes
            .map(route => {
                const newSubRoutes = [];
                for (const subRoute of route.subRoutes) {
                    newSubRoutes.push(subRoute);
                }
                return newSubRoutes;
            })
            .reduce(joinFn);
        return newRoutes.concat(subRoutes);
    })
    .reduce(joinFn);

export const getGroups = () => groups;

export default {
    groups,
    allRoutes,
};
