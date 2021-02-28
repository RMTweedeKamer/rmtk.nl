class ImageUploader < Shrine
  ALLOWED_TYPES  = %w[image/jpeg image/svg+xml image/png image/webp]
  MAX_SIZE       = 10*1024*1024 # 10 MB
  MAX_DIMENSIONS = [5000, 5000] # 5000x5000

  THUMBNAILS = {
    small:  [300, 300],
    medium: [600, 600],
    large:  [800, 800],
  }

  plugin :remove_attachment
  plugin :pretty_location
  plugin :validation_helpers
  plugin :store_dimensions, log_subscriber: nil

  Attacher.validate do
    validate_min_size 10 * 1024
    validate_max_size 10 * 1024 * 1024

    validate_mime_type %w[image/jpeg image/png image/webp image/svg+xml]
    validate_extension %w[jpg jpeg png webp svg]
  end
end
