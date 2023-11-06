import { ModuleOptions } from './options';

declare module '@nuxt/schema' {
	interface RuntimeConfig {
		nuxtSession: ModuleOptions;
	}
}