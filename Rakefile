desc 'Build the site'
task :build do
  sh 'bundle exec jekyll build'
  sh 'gitbook build ../onebody-help --output=./_site/onebody/help/'
end

desc 'Build and deploy the site'
task deploy: :build do
  sh 'rsync -avz --stats --progress --delete --exclude=.git --exclude downloads _site/ church.io:/var/www/statics/church.io/'
end
