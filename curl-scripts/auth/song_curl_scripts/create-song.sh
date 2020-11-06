API="http://localhost:4741"
URL_PATH="/songs"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "song": {
      "title": "'"${TITLE}"'",
      "album": "'"${ALBUM}"'",
      "artist": "'"${ARTIST}"'",
      "genre": "'"${GENRE}"'"
    }
  }'

echo
