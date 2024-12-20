import {
    clearH3EventContextSession,
    defineEventHandler,
} from '#imports';

export default defineEventHandler((event) => {
    clearH3EventContextSession(event);
    event.context.session.testValue = -9999;
    return event.context.session;
});
