var sox = require('sox');

module.exports = {
  cpuBound: true,
  start: function(done) {
    var self = this;
    var tempAudioFile = self.context.makeTemp({
      suffix: '.' + self.settings.format.toLowerCase()
    });

    // consume temp path
    var tempPath = self.context.tempPath;
    delete self.context.tempPath;

    var transcode = sox.transcode(tempPath, tempAudioFile, self.options);
    transcode.on('error', function(err) {
      done(err);
    });
    transcode.on('progress', function(amountDone, amountTotal) {
      self.exports.amountDone = amountDone;
      self.exports.amountTotal = amountTotal;
      self.emit('progress');
    });
    transcode.on('src', function(src) {
      self.exports.src = src;
      self.emit('update');
    });
    transcode.on('dest', function(dest) {
      self.exports.dest = dest;
      self.emit('update');
    });
    transcode.on('end', function() {
      self.context.tempPath = tempAudioFile;
      done();
    });
    transcode.start();
  }
};
