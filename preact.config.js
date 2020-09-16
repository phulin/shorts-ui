import CopyWebpackPlugin from 'copy-webpack-plugin';

export default (config) => {
    config.output.publicPath = '/shorts-ui';
    config.devServer.publicPath = '/shorts-ui';
    config.devServer.index = '';
    config.devServer.proxy = {
        context: ['**', '!/shorts-ui/**'],
        target: 'http://localhost:60080',
    },
    config.externals = { ...config.externals, ashProperties: 'ashProperties' };
    config.plugins.push(
        new CopyWebpackPlugin([
            {
                context: `${__dirname}`,
                from: 'choice.1420.ash',
                to: `${__dirname}/build/relay`,
            },
            {
                context: `${__dirname}`,
                from: 'shorts-ui.ash',
                to: `${__dirname}/build/relay/shorts-ui`,
            }
        ]),
    );
};