module.exports = {
  name: 'DynamoDB',
  acronym: 'DYNDB',
  logging: { level: 'info' },
  entityTypes: ['IPv4', 'IPv6', 'domain', 'url', 'cve', 'hash', 'email'],
  description: 'DynamoDB Integration',
  defaultColor: 'light-gray',
  styles: ['./styles/style.less'],
  block: {
    component: {
      file: './component/block.js'
    },
    template: {
      file: './template/block.hbs'
    }
  },
  request: {
    // Provide the path to your certFile. Leave an empty string to ignore this option.
    // Relative paths are relative to the integration's root directory
    cert: '',
    // Provide the path to your private key. Leave an empty string to ignore this option.
    // Relative paths are relative to the integration's root directory
    key: '',
    // Provide the key passphrase if required.  Leave an empty string to ignore this option.
    // Relative paths are relative to the integration's root directory
    passphrase: '',
    // Provide the Certificate Authority. Leave an empty string to ignore this option.
    // Relative paths are relative to the integration's root directory
    ca: '',
    // An HTTP proxy to be used. Supports proxy Auth with Basic Auth, identical to support for
    // the url parameter (by embedding the auth info in the uri)
    proxy: '',
    /**
     * If set to false, the integration will ignore SSL errors.  This will allow the integration to connect
     * to the servers without valid SSL certificates.  Please note that we do NOT recommending setting this
     * to false in a production environment.
     */
    rejectUnauthorized: true
  },
  options: [
    {
      key: 'region',
      name: 'AWS Region',
      description:
        'The AWS Region for your DynamoDB database.  The integration does not support local dynamodb instances.',
      default: {
        value: 'us-east-2',
        display: 'US East (Ohio)'
      },
      options: [
        {
          value: 'us-east-2',
          display: 'US East (Ohio)'
        },
        {
          value: 'us-east-1',
          display: 'US East (N. Virginia)'
        },
        {
          value: 'us-west-1',
          display: 'US West (N. California)'
        },
        {
          value: 'us-west-2',
          display: 'US West (Oregon)'
        },
        {
          value: 'af-south-1',
          display: 'Africa (Cape Town)'
        },
        {
          value: 'ap-east-1',
          display: 'Asia Pacific (Hong Kong)'
        },
        {
          value: 'ap-southeast-3',
          display: 'Asia Pacific (Jakarta)'
        },
        {
          value: 'ap-south-1',
          display: 'Asia Pacific (Mumbai)'
        },
        {
          value: 'ap-northeast-3',
          display: 'Asia Pacific (Osaka)'
        },
        {
          value: 'ap-northeast-2',
          display: 'Asia Pacific (Seoul)'
        },
        {
          value: 'ap-southeast-1',
          display: 'Asia Pacific (Singapore)'
        },
        {
          value: 'ap-southeast-2',
          display: 'Asia Pacific (Sydney)'
        },
        {
          value: 'ap-northeast-1',
          display: 'Asia Pacific (Tokyo)'
        },
        {
          value: 'ca-central-1',
          display: 'Canada (Central)'
        },
        {
          value: 'eu-central-1',
          display: 'Europe (Frankfurt)'
        },
        {
          value: 'eu-west-1',
          display: 'Europe (Ireland)'
        },
        {
          value: 'eu-west-2',
          display: 'Europe (London)'
        },
        {
          value: 'eu-south-1',
          display: 'Europe (Milan)'
        },
        {
          value: 'eu-west-3',
          display: 'Europe (Paris)'
        },
        {
          value: 'eu-north-1',
          display: 'Europe (Stockholm)'
        },
        {
          value: 'me-south-1',
          display: 'Middle East (Bahrain)'
        },
        {
          value: 'sa-east-1',
          display: 'South America (São Paulo)'
        },
        {
          value: 'us-gov-east-1',
          display: 'AWS GovCloud (US-East)'
        },
        {
          value: 'us-gov-west-1',
          display: 'AWS GovCloud (US-West)'
        }
      ],
      multiple: false,
      type: 'select',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'accessKeyId',
      name: 'AWS Access Key Id',
      description:
        'The access key ID that identifies the security credentials used to authenticate to the specified DynamoDB instance.',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'secretAccessKey',
      name: 'AWS Secret Access Key',
      description: 'The secret access key that can be used to sign requests.',
      default: '',
      type: 'password',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'query',
      name: 'PartiQL Query',
      description:
        'The PartiQL query to execute for each entity searched.  Use a question mark `?` to represent the query parameter.  The value of the query parameter can be set via the "PartiQL Query Parameter Value" option below.',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'queryParameter',
      name: 'PartiQL Query Parameter Value',
      description:
        'The value of the parameter (?) used in the PartiQL Query.  The special string `{{entity}}` will be replaced by the entity value. Defaults to `{{entity}}`.  Only string parameters are supported.',
      default: '{{entity}}',
      type: 'text',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'queryLimit',
      name: 'PartiQL Query Limit',
      description: 'Set a limit on the number of values returned by the PartiQL query (defaults to 5).',
      default: 5,
      type: 'number',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'summaryAttributes',
      name: 'Summary Attributes',
      description:
        'Comma delimited list of attribute names to include as part of the summary.  JSON dot notation can be used to target nested attributes. Attributes must be returned by your PartiQL query.  You can add a label to your summary attribute by prepending the label to the attribute path and separating it with a colon (i.e., "<label>:<json path>").',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'detailAttributes',
      name: 'Detail Attributes',
      description:
        'Comma delimited list of attribute names to include as part of the details block.   JSON dot notation can be used to target nested attributes. Attributes must be returned by your PartiQL query.  You can add a label to your detail attribute by prepending the label to the attribute path and separating it with a colon (i.e., "<label>:<json path>"). If left blank, all fields will be displayed as a JSON document.',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: true
    }
  ]
};
