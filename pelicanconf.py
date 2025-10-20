AUTHOR = "Léonard Seydoux"
SITENAME = "leonard-seydoux"
SITEURL = "http://127.0.0.1:8000/"

PATH = "content"

TIMEZONE = "Europe/Rome"

THEME = "themes/Flex"

DEFAULT_LANG = "en"

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = ()

# Social widget
SOCIAL = (("GitHub", "https://github.com/leonard-seydoux"),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True

# Ensure Pelican copies your custom static files
STATIC_PATHS = ["images", "static"]

# Add your custom stylesheet to the theme
CUSTOM_CSS = "static/css/custom.css"
# Use an absolute path so the logo resolves from the site root on every page
SITELOGO = "/images/earth.gif"

THEME_COLOR = "dark"
THEME_COLOR_AUTO_DETECT_BROWSER_PREFERENCE = True
THEME_COLOR_ENABLE_USER_OVERRIDE = False

PYGMENTS_STYLE = "emacs"
PYGMENTS_STYLE_DARK = "monokai"

# By default Pelican generates an article index at "index.html". To use
# a custom Markdown page as the homepage, exclude 'index' from
# DIRECT_TEMPLATES so Pelican doesn't overwrite `content/pages/index.md`'s
# output. Keep other defaults (tags, categories, archives) available.
DIRECT_TEMPLATES = ("tags", "categories", "archives", "authors")

# Copyright settings used by the theme's footer
from datetime import datetime

# By default use the AUTHOR value for the copyright holder; change if desired
COPYRIGHT_YEAR = datetime.now().year
COPYRIGHT_NAME = AUTHOR
