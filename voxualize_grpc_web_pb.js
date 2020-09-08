/**
 * @fileoverview gRPC-Web generated client stub for voxualize
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.voxualize = require('./voxualize_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.voxualize.GreeterClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.voxualize.GreeterPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.voxualize.FilesRequest,
 *   !proto.voxualize.FilesList>}
 */
const methodDescriptor_Greeter_ListFiles = new grpc.web.MethodDescriptor(
  '/voxualize.Greeter/ListFiles',
  grpc.web.MethodType.UNARY,
  proto.voxualize.FilesRequest,
  proto.voxualize.FilesList,
  /**
   * @param {!proto.voxualize.FilesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.voxualize.FilesList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.voxualize.FilesRequest,
 *   !proto.voxualize.FilesList>}
 */
const methodInfo_Greeter_ListFiles = new grpc.web.AbstractClientBase.MethodInfo(
  proto.voxualize.FilesList,
  /**
   * @param {!proto.voxualize.FilesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.voxualize.FilesList.deserializeBinary
);


/**
 * @param {!proto.voxualize.FilesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.voxualize.FilesList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.voxualize.FilesList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.voxualize.GreeterClient.prototype.listFiles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/voxualize.Greeter/ListFiles',
      request,
      metadata || {},
      methodDescriptor_Greeter_ListFiles,
      callback);
};


/**
 * @param {!proto.voxualize.FilesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.voxualize.FilesList>}
 *     A native promise that resolves to the response
 */
proto.voxualize.GreeterPromiseClient.prototype.listFiles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/voxualize.Greeter/ListFiles',
      request,
      metadata || {},
      methodDescriptor_Greeter_ListFiles);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.voxualize.FileDetails,
 *   !proto.voxualize.DimensionDetails>}
 */
const methodDescriptor_Greeter_ChooseFile = new grpc.web.MethodDescriptor(
  '/voxualize.Greeter/ChooseFile',
  grpc.web.MethodType.UNARY,
  proto.voxualize.FileDetails,
  proto.voxualize.DimensionDetails,
  /**
   * @param {!proto.voxualize.FileDetails} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.voxualize.DimensionDetails.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.voxualize.FileDetails,
 *   !proto.voxualize.DimensionDetails>}
 */
const methodInfo_Greeter_ChooseFile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.voxualize.DimensionDetails,
  /**
   * @param {!proto.voxualize.FileDetails} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.voxualize.DimensionDetails.deserializeBinary
);


/**
 * @param {!proto.voxualize.FileDetails} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.voxualize.DimensionDetails)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.voxualize.DimensionDetails>|undefined}
 *     The XHR Node Readable Stream
 */
proto.voxualize.GreeterClient.prototype.chooseFile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/voxualize.Greeter/ChooseFile',
      request,
      metadata || {},
      methodDescriptor_Greeter_ChooseFile,
      callback);
};


/**
 * @param {!proto.voxualize.FileDetails} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.voxualize.DimensionDetails>}
 *     A native promise that resolves to the response
 */
proto.voxualize.GreeterPromiseClient.prototype.chooseFile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/voxualize.Greeter/ChooseFile',
      request,
      metadata || {},
      methodDescriptor_Greeter_ChooseFile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.voxualize.CameraInfo,
 *   !proto.voxualize.DataModel>}
 */
const methodDescriptor_Greeter_GetHighQualityRender = new grpc.web.MethodDescriptor(
  '/voxualize.Greeter/GetHighQualityRender',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.voxualize.CameraInfo,
  proto.voxualize.DataModel,
  /**
   * @param {!proto.voxualize.CameraInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.voxualize.DataModel.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.voxualize.CameraInfo,
 *   !proto.voxualize.DataModel>}
 */
const methodInfo_Greeter_GetHighQualityRender = new grpc.web.AbstractClientBase.MethodInfo(
  proto.voxualize.DataModel,
  /**
   * @param {!proto.voxualize.CameraInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.voxualize.DataModel.deserializeBinary
);


/**
 * @param {!proto.voxualize.CameraInfo} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.voxualize.DataModel>}
 *     The XHR Node Readable Stream
 */
proto.voxualize.GreeterClient.prototype.getHighQualityRender =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/voxualize.Greeter/GetHighQualityRender',
      request,
      metadata || {},
      methodDescriptor_Greeter_GetHighQualityRender);
};


/**
 * @param {!proto.voxualize.CameraInfo} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.voxualize.DataModel>}
 *     The XHR Node Readable Stream
 */
proto.voxualize.GreeterPromiseClient.prototype.getHighQualityRender =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/voxualize.Greeter/GetHighQualityRender',
      request,
      metadata || {},
      methodDescriptor_Greeter_GetHighQualityRender);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.voxualize.Dummy,
 *   !proto.voxualize.DataModel>}
 */
const methodDescriptor_Greeter_GetModelData = new grpc.web.MethodDescriptor(
  '/voxualize.Greeter/GetModelData',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.voxualize.Dummy,
  proto.voxualize.DataModel,
  /**
   * @param {!proto.voxualize.Dummy} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.voxualize.DataModel.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.voxualize.Dummy,
 *   !proto.voxualize.DataModel>}
 */
const methodInfo_Greeter_GetModelData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.voxualize.DataModel,
  /**
   * @param {!proto.voxualize.Dummy} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.voxualize.DataModel.deserializeBinary
);


/**
 * @param {!proto.voxualize.Dummy} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.voxualize.DataModel>}
 *     The XHR Node Readable Stream
 */
proto.voxualize.GreeterClient.prototype.getModelData =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/voxualize.Greeter/GetModelData',
      request,
      metadata || {},
      methodDescriptor_Greeter_GetModelData);
};


/**
 * @param {!proto.voxualize.Dummy} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.voxualize.DataModel>}
 *     The XHR Node Readable Stream
 */
proto.voxualize.GreeterPromiseClient.prototype.getModelData =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/voxualize.Greeter/GetModelData',
      request,
      metadata || {},
      methodDescriptor_Greeter_GetModelData);
};


module.exports = proto.voxualize;

