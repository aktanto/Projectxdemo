import asyncio
from supabase_client import Client

from dotenv import dotenv_values
config = dotenv_values(".env")

supabase = Client(
    api_url=config.get("https://hvserumeibjlyywdqcze.supabase.co"),
    api_key=config.get("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQxNzM0Mjk0LCJleHAiOjE5NTczMTAyOTR9.BYQTb7g43MSa5-RJNK77wRmJonGGkbb8Ta4wSLn25SQ")
)

async def main():
    # Insertion of Data

    error, result = await (
      supabase.table("user_auth")
      .insert([{"title": "post title"}])
    )

    # Updating of Data
    new_title  =  "updated title"
    _id        = 1
    error, result =  await (
      supabase.table("posts")
      .update(
        {"id"   : f"eq.{_id}"},
        {"title": new_title}
      )
    )

    # Deleting of Data

    error, result = await (
        supabase.table("posts")
        .delete({"id": _id})
    )

    # Filtering Data

    # All posts
    error, results = await (
        supabase.table("posts")
        .select("*")
        .query()
    )

    # Add limits/range
    error, results = await (
        supabase.table("posts")
        .select("*")
        .range(0,10)
        .query()
    )

    # Being specific
    error, results = await (
        supabase.table("posts")
        .select("*")
        .eq("id",1)
        .query()
    )
  
  
     

if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())
Python
