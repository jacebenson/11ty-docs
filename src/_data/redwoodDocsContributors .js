require('dotenv').config()
const fetch = require("node-fetch");

module.exports = async function() {
  console.log( "Fetching new github redwood contributors" );
  if(process.env.dev){
    return [
      {
        login: 'peterp',
        id: 44849,
        node_id: 'MDQ6VXNlcjQ0ODQ5',
        avatar_url: 'https://avatars.githubusercontent.com/u/44849?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/peterp',
        html_url: 'https://github.com/peterp',
        followers_url: 'https://api.github.com/users/peterp/followers',
        following_url: 'https://api.github.com/users/peterp/following{/other_user}',
        gists_url: 'https://api.github.com/users/peterp/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/peterp/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/peterp/subscriptions',
        organizations_url: 'https://api.github.com/users/peterp/orgs',
        repos_url: 'https://api.github.com/users/peterp/repos',
        events_url: 'https://api.github.com/users/peterp/events{/privacy}',
        received_events_url: 'https://api.github.com/users/peterp/received_events',
        type: 'User',
        site_admin: false,
        contributions: 1732
      },
      {
        login: 'thedavidprice',
        id: 2951,
        node_id: 'MDQ6VXNlcjI5NTE=',
        avatar_url: 'https://avatars.githubusercontent.com/u/2951?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/thedavidprice',
        html_url: 'https://github.com/thedavidprice',
        followers_url: 'https://api.github.com/users/thedavidprice/followers',
        following_url: 'https://api.github.com/users/thedavidprice/following{/other_user}',
        gists_url: 'https://api.github.com/users/thedavidprice/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/thedavidprice/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/thedavidprice/subscriptions',
        organizations_url: 'https://api.github.com/users/thedavidprice/orgs',
        repos_url: 'https://api.github.com/users/thedavidprice/repos',
        events_url: 'https://api.github.com/users/thedavidprice/events{/privacy}',
        received_events_url: 'https://api.github.com/users/thedavidprice/received_events',
        type: 'User',
        site_admin: false,
        contributions: 770
      },
      {
        login: 'dependabot[bot]',
        id: 49699333,
        node_id: 'MDM6Qm90NDk2OTkzMzM=',
        avatar_url: 'https://avatars.githubusercontent.com/in/29110?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/dependabot%5Bbot%5D',
        html_url: 'https://github.com/apps/dependabot',
        followers_url: 'https://api.github.com/users/dependabot%5Bbot%5D/followers',
        following_url: 'https://api.github.com/users/dependabot%5Bbot%5D/following{/other_user}',
        gists_url: 'https://api.github.com/users/dependabot%5Bbot%5D/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/dependabot%5Bbot%5D/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/dependabot%5Bbot%5D/subscriptions',
        organizations_url: 'https://api.github.com/users/dependabot%5Bbot%5D/orgs',
        repos_url: 'https://api.github.com/users/dependabot%5Bbot%5D/repos',
        events_url: 'https://api.github.com/users/dependabot%5Bbot%5D/events{/privacy}',
        received_events_url: 'https://api.github.com/users/dependabot%5Bbot%5D/received_events',
        type: 'Bot',
        site_admin: false,
        contributions: 191
      },
      {
        login: 'Tobbe',
        id: 30793,
        node_id: 'MDQ6VXNlcjMwNzkz',
        avatar_url: 'https://avatars.githubusercontent.com/u/30793?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Tobbe',
        html_url: 'https://github.com/Tobbe',
        followers_url: 'https://api.github.com/users/Tobbe/followers',
        following_url: 'https://api.github.com/users/Tobbe/following{/other_user}',
        gists_url: 'https://api.github.com/users/Tobbe/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/Tobbe/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Tobbe/subscriptions',
        organizations_url: 'https://api.github.com/users/Tobbe/orgs',
        repos_url: 'https://api.github.com/users/Tobbe/repos',
        events_url: 'https://api.github.com/users/Tobbe/events{/privacy}',
        received_events_url: 'https://api.github.com/users/Tobbe/received_events',
        type: 'User',
        site_admin: false,
        contributions: 173
      },
      {
        login: 'dac09',
        id: 1521877,
        node_id: 'MDQ6VXNlcjE1MjE4Nzc=',
        avatar_url: 'https://avatars.githubusercontent.com/u/1521877?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/dac09',
        html_url: 'https://github.com/dac09',
        followers_url: 'https://api.github.com/users/dac09/followers',
        following_url: 'https://api.github.com/users/dac09/following{/other_user}',
        gists_url: 'https://api.github.com/users/dac09/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/dac09/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/dac09/subscriptions',
        organizations_url: 'https://api.github.com/users/dac09/orgs',
        repos_url: 'https://api.github.com/users/dac09/repos',
        events_url: 'https://api.github.com/users/dac09/events{/privacy}',
        received_events_url: 'https://api.github.com/users/dac09/received_events',
        type: 'User',
        site_admin: false,
        contributions: 162
      },
      {
        login: 'jtoar',
        id: 32992335,
        node_id: 'MDQ6VXNlcjMyOTkyMzM1',
        avatar_url: 'https://avatars.githubusercontent.com/u/32992335?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/jtoar',
        html_url: 'https://github.com/jtoar',
        followers_url: 'https://api.github.com/users/jtoar/followers',
        following_url: 'https://api.github.com/users/jtoar/following{/other_user}',
        gists_url: 'https://api.github.com/users/jtoar/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/jtoar/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/jtoar/subscriptions',
        organizations_url: 'https://api.github.com/users/jtoar/orgs',
        repos_url: 'https://api.github.com/users/jtoar/repos',
        events_url: 'https://api.github.com/users/jtoar/events{/privacy}',
        received_events_url: 'https://api.github.com/users/jtoar/received_events',
        type: 'User',
        site_admin: false,
        contributions: 142
      },
      {
        login: 'dthyresson',
        id: 1051633,
        node_id: 'MDQ6VXNlcjEwNTE2MzM=',
        avatar_url: 'https://avatars.githubusercontent.com/u/1051633?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/dthyresson',
        html_url: 'https://github.com/dthyresson',
        followers_url: 'https://api.github.com/users/dthyresson/followers',
        following_url: 'https://api.github.com/users/dthyresson/following{/other_user}',
        gists_url: 'https://api.github.com/users/dthyresson/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/dthyresson/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/dthyresson/subscriptions',
        organizations_url: 'https://api.github.com/users/dthyresson/orgs',
        repos_url: 'https://api.github.com/users/dthyresson/repos',
        events_url: 'https://api.github.com/users/dthyresson/events{/privacy}',
        received_events_url: 'https://api.github.com/users/dthyresson/received_events',
        type: 'User',
        site_admin: false,
        contributions: 114
      },
      {
        login: 'cannikin',
        id: 300,
        node_id: 'MDQ6VXNlcjMwMA==',
        avatar_url: 'https://avatars.githubusercontent.com/u/300?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/cannikin',
        html_url: 'https://github.com/cannikin',
        followers_url: 'https://api.github.com/users/cannikin/followers',
        following_url: 'https://api.github.com/users/cannikin/following{/other_user}',
        gists_url: 'https://api.github.com/users/cannikin/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/cannikin/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/cannikin/subscriptions',
        organizations_url: 'https://api.github.com/users/cannikin/orgs',
        repos_url: 'https://api.github.com/users/cannikin/repos',
        events_url: 'https://api.github.com/users/cannikin/events{/privacy}',
        received_events_url: 'https://api.github.com/users/cannikin/received_events',
        type: 'User',
        site_admin: false,
        contributions: 83
      },
      {
        login: 'mojombo',
        id: 1,
        node_id: 'MDQ6VXNlcjE=',
        avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/mojombo',
        html_url: 'https://github.com/mojombo',
        followers_url: 'https://api.github.com/users/mojombo/followers',
        following_url: 'https://api.github.com/users/mojombo/following{/other_user}',
        gists_url: 'https://api.github.com/users/mojombo/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/mojombo/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/mojombo/subscriptions',
        organizations_url: 'https://api.github.com/users/mojombo/orgs',
        repos_url: 'https://api.github.com/users/mojombo/repos',
        events_url: 'https://api.github.com/users/mojombo/events{/privacy}',
        received_events_url: 'https://api.github.com/users/mojombo/received_events',
        type: 'User',
        site_admin: false,
        contributions: 81
      },
      {
        login: 'RobertBroersma',
        id: 4519828,
        node_id: 'MDQ6VXNlcjQ1MTk4Mjg=',
        avatar_url: 'https://avatars.githubusercontent.com/u/4519828?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/RobertBroersma',
        html_url: 'https://github.com/RobertBroersma',
        followers_url: 'https://api.github.com/users/RobertBroersma/followers',
        following_url: 'https://api.github.com/users/RobertBroersma/following{/other_user}',
        gists_url: 'https://api.github.com/users/RobertBroersma/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/RobertBroersma/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/RobertBroersma/subscriptions',
        organizations_url: 'https://api.github.com/users/RobertBroersma/orgs',
        repos_url: 'https://api.github.com/users/RobertBroersma/repos',
        events_url: 'https://api.github.com/users/RobertBroersma/events{/privacy}',
        received_events_url: 'https://api.github.com/users/RobertBroersma/received_events',
        type: 'User',
        site_admin: false,
        contributions: 65
      },
      {
        login: 'kimadeline',
        id: 51720070,
        node_id: 'MDQ6VXNlcjUxNzIwMDcw',
        avatar_url: 'https://avatars.githubusercontent.com/u/51720070?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/kimadeline',
        html_url: 'https://github.com/kimadeline',
        followers_url: 'https://api.github.com/users/kimadeline/followers',
        following_url: 'https://api.github.com/users/kimadeline/following{/other_user}',
        gists_url: 'https://api.github.com/users/kimadeline/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/kimadeline/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/kimadeline/subscriptions',
        organizations_url: 'https://api.github.com/users/kimadeline/orgs',
        repos_url: 'https://api.github.com/users/kimadeline/repos',
        events_url: 'https://api.github.com/users/kimadeline/events{/privacy}',
        received_events_url: 'https://api.github.com/users/kimadeline/received_events',
        type: 'User',
        site_admin: false,
        contributions: 59
      },
      {
        login: 'jeliasson',
        id: 865493,
        node_id: 'MDQ6VXNlcjg2NTQ5Mw==',
        avatar_url: 'https://avatars.githubusercontent.com/u/865493?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/jeliasson',
        html_url: 'https://github.com/jeliasson',
        followers_url: 'https://api.github.com/users/jeliasson/followers',
        following_url: 'https://api.github.com/users/jeliasson/following{/other_user}',
        gists_url: 'https://api.github.com/users/jeliasson/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/jeliasson/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/jeliasson/subscriptions',
        organizations_url: 'https://api.github.com/users/jeliasson/orgs',
        repos_url: 'https://api.github.com/users/jeliasson/repos',
        events_url: 'https://api.github.com/users/jeliasson/events{/privacy}',
        received_events_url: 'https://api.github.com/users/jeliasson/received_events',
        type: 'User',
        site_admin: false,
        contributions: 37
      },
      {
        login: 'mohsen1',
        id: 543633,
        node_id: 'MDQ6VXNlcjU0MzYzMw==',
        avatar_url: 'https://avatars.githubusercontent.com/u/543633?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/mohsen1',
        html_url: 'https://github.com/mohsen1',
        followers_url: 'https://api.github.com/users/mohsen1/followers',
        following_url: 'https://api.github.com/users/mohsen1/following{/other_user}',
        gists_url: 'https://api.github.com/users/mohsen1/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/mohsen1/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/mohsen1/subscriptions',
        organizations_url: 'https://api.github.com/users/mohsen1/orgs',
        repos_url: 'https://api.github.com/users/mohsen1/repos',
        events_url: 'https://api.github.com/users/mohsen1/events{/privacy}',
        received_events_url: 'https://api.github.com/users/mohsen1/received_events',
        type: 'User',
        site_admin: false,
        contributions: 35
      },
      {
        login: 'Burnsy',
        id: 15834048,
        node_id: 'MDQ6VXNlcjE1ODM0MDQ4',
        avatar_url: 'https://avatars.githubusercontent.com/u/15834048?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Burnsy',
        html_url: 'https://github.com/Burnsy',
        followers_url: 'https://api.github.com/users/Burnsy/followers',
        following_url: 'https://api.github.com/users/Burnsy/following{/other_user}',
        gists_url: 'https://api.github.com/users/Burnsy/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/Burnsy/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Burnsy/subscriptions',
        organizations_url: 'https://api.github.com/users/Burnsy/orgs',
        repos_url: 'https://api.github.com/users/Burnsy/repos',
        events_url: 'https://api.github.com/users/Burnsy/events{/privacy}',
        received_events_url: 'https://api.github.com/users/Burnsy/received_events',
        type: 'User',
        site_admin: false,
        contributions: 35
      },
      {
        login: 'dhausser',
        id: 24432220,
        node_id: 'MDQ6VXNlcjI0NDMyMjIw',
        avatar_url: 'https://avatars.githubusercontent.com/u/24432220?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/dhausser',
        html_url: 'https://github.com/dhausser',
        followers_url: 'https://api.github.com/users/dhausser/followers',
        following_url: 'https://api.github.com/users/dhausser/following{/other_user}',
        gists_url: 'https://api.github.com/users/dhausser/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/dhausser/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/dhausser/subscriptions',
        organizations_url: 'https://api.github.com/users/dhausser/orgs',
        repos_url: 'https://api.github.com/users/dhausser/repos',
        events_url: 'https://api.github.com/users/dhausser/events{/privacy}',
        received_events_url: 'https://api.github.com/users/dhausser/received_events',
        type: 'User',
        site_admin: false,
        contributions: 33
      },
      {
        login: 'antonmoiseev',
        id: 182853,
        node_id: 'MDQ6VXNlcjE4Mjg1Mw==',
        avatar_url: 'https://avatars.githubusercontent.com/u/182853?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/antonmoiseev',
        html_url: 'https://github.com/antonmoiseev',
        followers_url: 'https://api.github.com/users/antonmoiseev/followers',
        following_url: 'https://api.github.com/users/antonmoiseev/following{/other_user}',
        gists_url: 'https://api.github.com/users/antonmoiseev/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/antonmoiseev/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/antonmoiseev/subscriptions',
        organizations_url: 'https://api.github.com/users/antonmoiseev/orgs',
        repos_url: 'https://api.github.com/users/antonmoiseev/repos',
        events_url: 'https://api.github.com/users/antonmoiseev/events{/privacy}',
        received_events_url: 'https://api.github.com/users/antonmoiseev/received_events',
        type: 'User',
        site_admin: false,
        contributions: 29
      },
      {
        login: 'Terris',
        id: 458233,
        node_id: 'MDQ6VXNlcjQ1ODIzMw==',
        avatar_url: 'https://avatars.githubusercontent.com/u/458233?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Terris',
        html_url: 'https://github.com/Terris',
        followers_url: 'https://api.github.com/users/Terris/followers',
        following_url: 'https://api.github.com/users/Terris/following{/other_user}',
        gists_url: 'https://api.github.com/users/Terris/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/Terris/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Terris/subscriptions',
        organizations_url: 'https://api.github.com/users/Terris/orgs',
        repos_url: 'https://api.github.com/users/Terris/repos',
        events_url: 'https://api.github.com/users/Terris/events{/privacy}',
        received_events_url: 'https://api.github.com/users/Terris/received_events',
        type: 'User',
        site_admin: false,
        contributions: 24
      },
      {
        login: 'aldonline',
        id: 154884,
        node_id: 'MDQ6VXNlcjE1NDg4NA==',
        avatar_url: 'https://avatars.githubusercontent.com/u/154884?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/aldonline',
        html_url: 'https://github.com/aldonline',
        followers_url: 'https://api.github.com/users/aldonline/followers',
        following_url: 'https://api.github.com/users/aldonline/following{/other_user}',
        gists_url: 'https://api.github.com/users/aldonline/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/aldonline/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/aldonline/subscriptions',
        organizations_url: 'https://api.github.com/users/aldonline/orgs',
        repos_url: 'https://api.github.com/users/aldonline/repos',
        events_url: 'https://api.github.com/users/aldonline/events{/privacy}',
        received_events_url: 'https://api.github.com/users/aldonline/received_events',
        type: 'User',
        site_admin: false,
        contributions: 22
      },
      {
        login: 'Krisztiaan',
        id: 4700811,
        node_id: 'MDQ6VXNlcjQ3MDA4MTE=',
        avatar_url: 'https://avatars.githubusercontent.com/u/4700811?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Krisztiaan',
        html_url: 'https://github.com/Krisztiaan',
        followers_url: 'https://api.github.com/users/Krisztiaan/followers',
        following_url: 'https://api.github.com/users/Krisztiaan/following{/other_user}',
        gists_url: 'https://api.github.com/users/Krisztiaan/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/Krisztiaan/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Krisztiaan/subscriptions',
        organizations_url: 'https://api.github.com/users/Krisztiaan/orgs',
        repos_url: 'https://api.github.com/users/Krisztiaan/repos',
        events_url: 'https://api.github.com/users/Krisztiaan/events{/privacy}',
        received_events_url: 'https://api.github.com/users/Krisztiaan/received_events',
        type: 'User',
        site_admin: false,
        contributions: 22
      },
      {
        login: 'forresthayes',
        id: 44448047,
        node_id: 'MDQ6VXNlcjQ0NDQ4MDQ3',
        avatar_url: 'https://avatars.githubusercontent.com/u/44448047?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/forresthayes',
        html_url: 'https://github.com/forresthayes',
        followers_url: 'https://api.github.com/users/forresthayes/followers',
        following_url: 'https://api.github.com/users/forresthayes/following{/other_user}',
        gists_url: 'https://api.github.com/users/forresthayes/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/forresthayes/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/forresthayes/subscriptions',
        organizations_url: 'https://api.github.com/users/forresthayes/orgs',
        repos_url: 'https://api.github.com/users/forresthayes/repos',
        events_url: 'https://api.github.com/users/forresthayes/events{/privacy}',
        received_events_url: 'https://api.github.com/users/forresthayes/received_events',
        type: 'User',
        site_admin: false,
        contributions: 21
      },
      {
        login: 'pi0neerpat',
        id: 35622595,
        node_id: 'MDQ6VXNlcjM1NjIyNTk1',
        avatar_url: 'https://avatars.githubusercontent.com/u/35622595?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/pi0neerpat',
        html_url: 'https://github.com/pi0neerpat',
        followers_url: 'https://api.github.com/users/pi0neerpat/followers',
        following_url: 'https://api.github.com/users/pi0neerpat/following{/other_user}',
        gists_url: 'https://api.github.com/users/pi0neerpat/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/pi0neerpat/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/pi0neerpat/subscriptions',
        organizations_url: 'https://api.github.com/users/pi0neerpat/orgs',
        repos_url: 'https://api.github.com/users/pi0neerpat/repos',
        events_url: 'https://api.github.com/users/pi0neerpat/events{/privacy}',
        received_events_url: 'https://api.github.com/users/pi0neerpat/received_events',
        type: 'User',
        site_admin: false,
        contributions: 21
      },
      {
        login: 'callingmedic911',
        id: 2629902,
        node_id: 'MDQ6VXNlcjI2Mjk5MDI=',
        avatar_url: 'https://avatars.githubusercontent.com/u/2629902?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/callingmedic911',
        html_url: 'https://github.com/callingmedic911',
        followers_url: 'https://api.github.com/users/callingmedic911/followers',
        following_url: 'https://api.github.com/users/callingmedic911/following{/other_user}',
        gists_url: 'https://api.github.com/users/callingmedic911/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/callingmedic911/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/callingmedic911/subscriptions',
        organizations_url: 'https://api.github.com/users/callingmedic911/orgs',
        repos_url: 'https://api.github.com/users/callingmedic911/repos',
        events_url: 'https://api.github.com/users/callingmedic911/events{/privacy}',
        received_events_url: 'https://api.github.com/users/callingmedic911/received_events',
        type: 'User',
        site_admin: false,
        contributions: 16
      },
      {
        login: 'cjreimer',
        id: 51102303,
        node_id: 'MDQ6VXNlcjUxMTAyMzAz',
        avatar_url: 'https://avatars.githubusercontent.com/u/51102303?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/cjreimer',
        html_url: 'https://github.com/cjreimer',
        followers_url: 'https://api.github.com/users/cjreimer/followers',
        following_url: 'https://api.github.com/users/cjreimer/following{/other_user}',
        gists_url: 'https://api.github.com/users/cjreimer/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/cjreimer/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/cjreimer/subscriptions',
        organizations_url: 'https://api.github.com/users/cjreimer/orgs',
        repos_url: 'https://api.github.com/users/cjreimer/repos',
        events_url: 'https://api.github.com/users/cjreimer/events{/privacy}',
        received_events_url: 'https://api.github.com/users/cjreimer/received_events',
        type: 'User',
        site_admin: false,
        contributions: 15
      },
      {
        login: 'jvanbaarsen',
        id: 1362793,
        node_id: 'MDQ6VXNlcjEzNjI3OTM=',
        avatar_url: 'https://avatars.githubusercontent.com/u/1362793?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/jvanbaarsen',
        html_url: 'https://github.com/jvanbaarsen',
        followers_url: 'https://api.github.com/users/jvanbaarsen/followers',
        following_url: 'https://api.github.com/users/jvanbaarsen/following{/other_user}',
        gists_url: 'https://api.github.com/users/jvanbaarsen/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/jvanbaarsen/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/jvanbaarsen/subscriptions',
        organizations_url: 'https://api.github.com/users/jvanbaarsen/orgs',
        repos_url: 'https://api.github.com/users/jvanbaarsen/repos',
        events_url: 'https://api.github.com/users/jvanbaarsen/events{/privacy}',
        received_events_url: 'https://api.github.com/users/jvanbaarsen/received_events',
        type: 'User',
        site_admin: false,
        contributions: 13
      },
      {
        login: 'hemildesai',
        id: 8195444,
        node_id: 'MDQ6VXNlcjgxOTU0NDQ=',
        avatar_url: 'https://avatars.githubusercontent.com/u/8195444?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/hemildesai',
        html_url: 'https://github.com/hemildesai',
        followers_url: 'https://api.github.com/users/hemildesai/followers',
        following_url: 'https://api.github.com/users/hemildesai/following{/other_user}',
        gists_url: 'https://api.github.com/users/hemildesai/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/hemildesai/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/hemildesai/subscriptions',
        organizations_url: 'https://api.github.com/users/hemildesai/orgs',
        repos_url: 'https://api.github.com/users/hemildesai/repos',
        events_url: 'https://api.github.com/users/hemildesai/events{/privacy}',
        received_events_url: 'https://api.github.com/users/hemildesai/received_events',
        type: 'User',
        site_admin: false,
        contributions: 13
      },
      {
        login: 'M0nica',
        id: 6998954,
        node_id: 'MDQ6VXNlcjY5OTg5NTQ=',
        avatar_url: 'https://avatars.githubusercontent.com/u/6998954?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/M0nica',
        html_url: 'https://github.com/M0nica',
        followers_url: 'https://api.github.com/users/M0nica/followers',
        following_url: 'https://api.github.com/users/M0nica/following{/other_user}',
        gists_url: 'https://api.github.com/users/M0nica/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/M0nica/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/M0nica/subscriptions',
        organizations_url: 'https://api.github.com/users/M0nica/orgs',
        repos_url: 'https://api.github.com/users/M0nica/repos',
        events_url: 'https://api.github.com/users/M0nica/events{/privacy}',
        received_events_url: 'https://api.github.com/users/M0nica/received_events',
        type: 'User',
        site_admin: false,
        contributions: 12
      },
      {
        login: 'jamesgeorge007',
        id: 25279263,
        node_id: 'MDQ6VXNlcjI1Mjc5MjYz',
        avatar_url: 'https://avatars.githubusercontent.com/u/25279263?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/jamesgeorge007',
        html_url: 'https://github.com/jamesgeorge007',
        followers_url: 'https://api.github.com/users/jamesgeorge007/followers',
        following_url: 'https://api.github.com/users/jamesgeorge007/following{/other_user}',
        gists_url: 'https://api.github.com/users/jamesgeorge007/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/jamesgeorge007/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/jamesgeorge007/subscriptions',
        organizations_url: 'https://api.github.com/users/jamesgeorge007/orgs',
        repos_url: 'https://api.github.com/users/jamesgeorge007/repos',
        events_url: 'https://api.github.com/users/jamesgeorge007/events{/privacy}',
        received_events_url: 'https://api.github.com/users/jamesgeorge007/received_events',
        type: 'User',
        site_admin: false,
        contributions: 11
      },
      {
        login: 'bjackson',
        id: 47246,
        node_id: 'MDQ6VXNlcjQ3MjQ2',
        avatar_url: 'https://avatars.githubusercontent.com/u/47246?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/bjackson',
        html_url: 'https://github.com/bjackson',
        followers_url: 'https://api.github.com/users/bjackson/followers',
        following_url: 'https://api.github.com/users/bjackson/following{/other_user}',
        gists_url: 'https://api.github.com/users/bjackson/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/bjackson/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/bjackson/subscriptions',
        organizations_url: 'https://api.github.com/users/bjackson/orgs',
        repos_url: 'https://api.github.com/users/bjackson/repos',
        events_url: 'https://api.github.com/users/bjackson/events{/privacy}',
        received_events_url: 'https://api.github.com/users/bjackson/received_events',
        type: 'User',
        site_admin: false,
        contributions: 10
      },
      {
        login: 'gfpacheco',
        id: 3705660,
        node_id: 'MDQ6VXNlcjM3MDU2NjA=',
        avatar_url: 'https://avatars.githubusercontent.com/u/3705660?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/gfpacheco',
        html_url: 'https://github.com/gfpacheco',
        followers_url: 'https://api.github.com/users/gfpacheco/followers',
        following_url: 'https://api.github.com/users/gfpacheco/following{/other_user}',
        gists_url: 'https://api.github.com/users/gfpacheco/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/gfpacheco/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/gfpacheco/subscriptions',
        organizations_url: 'https://api.github.com/users/gfpacheco/orgs',
        repos_url: 'https://api.github.com/users/gfpacheco/repos',
        events_url: 'https://api.github.com/users/gfpacheco/events{/privacy}',
        received_events_url: 'https://api.github.com/users/gfpacheco/received_events',
        type: 'User',
        site_admin: false,
        contributions: 10
      },
      {
        login: 'amorriscode',
        id: 16005567,
        node_id: 'MDQ6VXNlcjE2MDA1NTY3',
        avatar_url: 'https://avatars.githubusercontent.com/u/16005567?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/amorriscode',
        html_url: 'https://github.com/amorriscode',
        followers_url: 'https://api.github.com/users/amorriscode/followers',
        following_url: 'https://api.github.com/users/amorriscode/following{/other_user}',
        gists_url: 'https://api.github.com/users/amorriscode/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/amorriscode/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/amorriscode/subscriptions',
        organizations_url: 'https://api.github.com/users/amorriscode/orgs',
        repos_url: 'https://api.github.com/users/amorriscode/repos',
        events_url: 'https://api.github.com/users/amorriscode/events{/privacy}',
        received_events_url: 'https://api.github.com/users/amorriscode/received_events',
        type: 'User',
        site_admin: false,
        contributions: 8
      }
    ];
  } else {//if not in dev mode make call
  // GitHub API: https://developer.github.com/v3/repos/#get
  return fetch("https://api.github.com/repos/redwoodjs/redwoodjs.com/contributors")
    .then(res => res.json()) // node-fetch option to transform to json
    .then(json => {
      // prune the data to return only what we want
      //github public api is limited to 60 calls per hour
      // if a bunch of builds are happening at once, this will fail
      console.log(json);
      return json;
    });
  }
};