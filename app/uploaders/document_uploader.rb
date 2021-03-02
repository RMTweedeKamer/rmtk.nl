class DocumentUploader < Shrine
  plugin :remove_attachment
  plugin :pretty_location
  plugin :validation_helpers
  plugin :store_dimensions, log_subscriber: nil

  Attacher.validate do
    validate_min_size 10 * 1024
    validate_max_size 10 * 1024 * 1024 # 10 MB

    validate_mime_type %w[application/pdf]
    validate_extension %w[PDF pdf]
  end
end
