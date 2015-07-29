Rails.application.configure do

  config.cache_classes = false

  config.eager_load = false

  config.consider_all_requests_local       = true
  config.action_controller.perform_caching = false

  config.action_mailer.raise_delivery_errors = false

  config.active_support.deprecation = :log

  config.active_record.migration_error = :page_load
  config.assets.debug = true
  config.assets.raise_runtime_errors = true

 config.action_controller.asset_host = Proc.new { |source|
    # set up DEV_ASSET_HOST to point to http://localhost:8080 unless you changed webpack-dev-server defaults.
    # we are telling Rails if encoutered a file named app.js, to serve it from a different asset host, namely our webpack-dev-server.
    # Depending on which version of Sprockets you're using, the most recent one adds .self on each asset link. So app.js is served as app.self.js.
    # This is the case in this app and so.
    'http://localhost:8080/' if source =~ /app\.+.*\.js\?.*/
  }
end
