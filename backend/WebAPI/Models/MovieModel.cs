namespace WebAPI.Models
{
    public class MovieModel
    {
        public List<Search> Search { get; set; }
        public string totalResults { get; set; }
        public string Response { get; set; }
    }

    public class Search
    {
        public string title { get; set; }
        public string year { get; set; }
        public string imdbID { get; set; }
        public string type { get; set; }
        public string poster { get; set; }
    }
}
