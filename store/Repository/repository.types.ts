import type { IUser } from 'store/User/user.types';

 
export interface ILicense {
    key: string
    name: string
    url: string
    spdx_id: string
    node_id: string
    html_url: string
}

export interface IRepository {
        id: number,
        node_id: string,
        name: string,
        full_name: string,
        owner: IUser,
        private: boolean,
        html_url: string,
        description: string,
        fork: string,
        url: string,
        created_at: string,
        updated_at: string,
        pushed_at: string,
        homepage: string
        size: number
        stargazers_count: number
        watchers_count: number
        language: string
        forks_count: number
        open_issues_count: number
        master_branch: string
        default_branch: string
        score: number
        archive_url: string
        assignees_url: string
        blobs_url: string
        branches_url: string
        collaborators_url: string
        comments_url: string
        commits_url: string
        compare_url: string
        contents_url: string
        contributors_url: string
        deployments_url: string
        downloads_url: string
        events_url: string
        forks_url: string
        git_commits_url: string
        git_refs_url: string
        git_tags_url: string
        git_url: string
        issue_comment_url: string
        issue_events_url: string
        issues_url: string
        keys_url: string
        labels_url: string
        languages_url: string
        merges_url: string
        milestones_url: string
        notifications_url: string
        pulls_url: string
        releases_url: string
        ssh_url: string
        stargazers_url: string
        statuses_url: string
        subscribers_url: string
        subscription_url: string
        tags_url: string
        teams_url: string
        trees_url: string
        clone_url: string
        mirror_url: string
        hooks_url: string
        svn_url: string
        forks: number
        open_issues: number
        watchers: number
        has_issues: boolean
        has_projects: boolean
        has_pages: boolean
        has_wiki: boolean
        has_downloads: boolean
        archived: boolean
        disabled: boolean
        visibility: string
        license: ILicense   
};


export interface IRepositoryState {
    repositories: IRepository[],
    isLoading: boolean,
    error: string
}