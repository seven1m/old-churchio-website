desc 'Build the site'
task :build do
  sh 'jekyll build'
  sh 'gitbook build ../onebody-help --output=./onebody/help/'
end

desc 'Build and deploy the site'
task deploy: :build do
  sh 'rsync -avz --stats --progress --delete --exclude=.git --exclude downloads _site/ church.io:/var/www/statics/church.io/'
end
