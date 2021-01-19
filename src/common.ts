export type Command = 'deploy' | 'remove';

export interface Options {
  helmKeyNamespace: string;
  helmKeyAppName: string;
  helmKeyImage: string;
  helmKeyPullSecret: string;
  helmKeyUrl: string;
  helmKeyContainerSuffix: string;
  helmRepoUsername: string;
  helmRepoPassword: string;
  baseUrl: string;
  dockerPullSecret: string;
  azureToken: string;
  helmOrganization: string;
  helmRepoUrl?: string;
  helmChartFilePath: string;
  helmTagMajor: string;
  dockerPassword: string;
  dockerUsername: string;
  dockerFile: string;
  dockerTagMajor: string;
  dockerOrganization: string;
  dockerRegistry: string;
  dockerImageName: string;
  hashSalt: string;
  githubToken: string;
  kubeConfig: string;
  helmNamespace: string;
  appName: string;
  cmd: Command | string;
}

export interface CommandResult {
  previewUrl?: string;
  helmReleaseName?: string;
  dockerImageVersion?: string;
  success: boolean;
}

export interface HelmReleaseInfo {
  name: string;
  namespace: string;
  revision: string;
  updated: string;
  status: string;
  chart: string;
  app_version: string;
}

export type HelmListResult = Array<HelmReleaseInfo>;

export interface DeploymentInfo {
  pullRequestId: string;
}

export interface Repo {
  owner: string;
  repo: string;
}
