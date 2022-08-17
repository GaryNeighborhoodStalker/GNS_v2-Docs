import { defineClientAppEnhance } from '@vuepress/client';
import {
	DiscordButton,
	DiscordButtons,
	DiscordEmbed,
	DiscordEmbedField,
	DiscordEmbedFields,
	DiscordInteraction,
	DiscordMarkdown,
	DiscordMention,
	DiscordMessage,
	DiscordMessages,
	DiscordReaction,
	DiscordReactions,
	install as DiscordMessageComponents,
} from '@discord-message-components/vue';
import DocsLink from './components/DocsLink.vue';
import ResultingCode from './components/ResultingCode.vue';
import djsAvatar from './assets/discord-avatar-djs.png';
import '@discord-message-components/vue/dist/style.css';

export default defineClientAppEnhance(({ app }) => {
	app.use(DiscordMessageComponents, {
		avatars: {
			djs: djsAvatar,
		},
		profiles: {
			user: {
				author: 'User',
				avatar: 'djs',
			},
			bot: {
				author: 'Guide Bot',
				avatar: 'green',
				bot: true,
			},
		},
	});

	app.component('DocsLink', DocsLink);
});
