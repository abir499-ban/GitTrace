export const GITHUB_API = "https://api.github.com"

export const defaultGitHubRepository: FetchRepo = {
    id: 0,
    node_id: "",
    name: "",
    full_name: "",
    private: false,
    owner: {
        login: "",
        id: 0,
        node_id: "",
        avatar_url: "",
        gravatar_id: "",
        url: "",
        html_url: "",
        followers_url: "",
        following_url: "",
        gists_url: "",
        starred_url: "",
        subscriptions_url: "",
        organizations_url: "",
        repos_url: "",
        events_url: "",
        received_events_url: "",
        type: "User",
        user_view_type: "public",
        site_admin: false,
    },
    html_url: "",
    description: "",
    fork: false,
    url: "",
    forks_url: "",
    keys_url: "",
    collaborators_url: "",
    teams_url: "",
    hooks_url: "",
    issue_events_url: "",
    events_url: "",
    assignees_url: "",
    branches_url: "",
    tags_url: "",
    blobs_url: "",
    git_tags_url: "",
    git_refs_url: "",
    trees_url: "",
    statuses_url: "",
    languages_url: "",
    stargazers_url: "",
    contributors_url: "",
    subscribers_url: "",
    subscription_url: "",
    commits_url: "",
    git_commits_url: "",
    comments_url: "",
    issue_comment_url: "",
    contents_url: "",
    compare_url: "",
    merges_url: "",
    archive_url: "",
    downloads_url: "",
    issues_url: "",
    pulls_url: "",
    milestones_url: "",
    notifications_url: "",
    labels_url: "",
    releases_url: "",
    deployments_url: "",
    created_at: "",
    updated_at: "",
    pushed_at: "",
    git_url: "",
    ssh_url: "",
    clone_url: "",
    svn_url: "",
    homepage: "",
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: "",
    has_issues: false,
    has_projects: false,
    has_downloads: false,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: false,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main",
    temp_clone_token: null,
    network_count: 0,
    subscribers_count: 0,
    createdAt: null
};


export const colorMap = {
    "Java": "#fc0335",
    "C": "#8c939c",
    "C++": "#292dab",
    "Python": "#2b07f2",
    "JavaScript": "#e3d514",
    "TypeScript": "#1677f5",
    "Ruby": "#9c1a21",
    "C#": "#563382",
    "CSS": "#0a8ca6",
    "HTML": "#ed7e15",
    "Markdown" : "#0a5c0a",
    "Jupyter Notebook" : "#ed4d2d"
}


export const defaultIssue: IssuesType = {
    url: "",
    id: 0,
    title: "Default Title",
    html_url: "",
    user: {
      login: "default_user",
      id: 0,
      avatar_url: "",
      html_url: "",
      type: "User",
    },
    state: "open",
  };

  export const defaultPopularRepoPayload : PopularRepoPayloadType = {
    language : '',
    topic : '',
    startCount : 10000
  }

  export const defaultUserJWTPayload: UserJWTPayload = {
    id: 0,
    name: '',
    email: '',
    bookMarkedNumbers: []
};

export const defaultUserFetched: UserFetched = {
  id: 0, // Default ID, usually a placeholder for uninitialized objects
  name: "", // Placeholder string
  email: "", // Placeholder email
  password: "", // Empty password by default
  isVerified: false, // Users are generally not verified by default
  isAdmin: false, // Default role is a non-admin user
  verifyPasswordToken: "", // Empty string for token by default
  verfiyPasswordTokenExpiry: null, // Null for no expiry set
  verifyToken: "", // Empty string for token by default
  verifyTokenExpiry: null, // Null for no expiry set
  bookMarkedNumbers: [] // Start with an empty array
};

  
  
