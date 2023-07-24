using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Net.Http;
using System.Net.Http.Headers;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        const string APIKey = "337f4251";
        const string BaseUrl = "http://www.omdbapi.com/";

        [HttpGet(Name = "Movies")]
        public async Task<MovieModel> Get(string search = "", int currentPage = 1)
        {
            var result = new MovieModel();

            using var client = new HttpClient();

            client.BaseAddress = new Uri($"{BaseUrl}");

            var url = $"?apikey={APIKey}&s=${search}&page=${currentPage}";
            HttpResponseMessage response = await client.GetAsync(url);

            if (response.IsSuccessStatusCode)
            {
                var resp = await response.Content.ReadAsStringAsync();

                result = JsonConvert.DeserializeObject<MovieModel>(resp);
            }

            return result;
        }

        [HttpGet("{imdbID}")]
        public async Task<MovieDetailModel> GetById(string imdbID)
        {
            var result = new MovieDetailModel();

            using var client = new HttpClient();

            client.BaseAddress = new Uri($"{BaseUrl}");

            var url = $"?apikey={APIKey}&i={imdbID}";
            HttpResponseMessage response = await client.GetAsync(url);

            if (response.IsSuccessStatusCode)
            {
                var resp = await response.Content.ReadAsStringAsync();

                result = JsonConvert.DeserializeObject<MovieDetailModel>(resp);
            }

            return result;
        }
    }
}
